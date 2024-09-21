"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { DialogTrigger } from "../ui/dialog";
import AddAgentModal from "./AddAgentModal";

export default function ChooseAgent({
  selectedAgent,
  setSelectedAgent,
  agents,
  setAgents,
}) {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/get-agents`)
      .then((res) => res.json())
      .then((data) => {
        setAgents(data.agents);
      });
  }, [setAgents]);

  return (
    <div className="mt-14 w-full text-[#021526] font-semibold flex flex-col gap-3">
      <label>აგენტი *</label>

      <Select value={selectedAgent} onValueChange={setSelectedAgent}>
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder="აირჩიე" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <AddAgentModal>
              <DialogTrigger asChild>
                <SelectLabel className="flex gap-2 items-center hover:bg-slate-50 text-[#021526] border-b cursor-pointer">
                  <div className="flex gap-2 items-center">
                    <Plus className="border rounded-full w-6 h-6 p-1" /> დაამატე
                    აგენტი
                  </div>
                </SelectLabel>
              </DialogTrigger>
            </AddAgentModal>
            {agents?.map((agent) => (
              <SelectItem
                className="border-b cursor-pointer"
                value={`${agent.name}${agent.surname}`}
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
              >
                {agent.name} {agent.surname}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
