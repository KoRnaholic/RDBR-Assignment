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
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import AddAgentModal from "./AddAgentModal";

export default function ChooseAgent({
  selectedAgent,
  setSelectedAgent,
  agents,
  setAgents,
}) {
  console.log(selectedAgent);

  useEffect(() => {
    fetch("http://localhost:3000/api/get-agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(data.agents);
      });
  }, [setAgents]);

  return (
    <div className="mt-10 w-full text-[#021526] font-semibold">
      <label>აგენტი</label>

      <label className="mt-2 block w-1/2  text-[#021526] font-semibold text-sm">
        {/* აირჩიე * */}
        {/* <select
          className="mt-1 block w-full outline-none px-2 rounded-md border py-2"
          // value={inputEmailValue}
          // onChange={handleEmailChange} // Controlled input for email
          name="email"
        >
          <option>აირჩიე</option>
          <option> დაამატე აგენტი</option>
          {/* {agents?.map((agent) => (
            <option key={agent.id} value={`${agent.name} ${agent.surname}`}>
              {agent.name} {agent.surname}
            </option>
          ))} */}
        {/* </select>  */}
      </label>

      <Select value={selectedAgent} onValueChange={setSelectedAgent}>
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder="აირჩიე" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="flex gap-2 items-center hover:bg-slate-50 text-[#021526] border-b cursor-pointer">
              <AddAgentModal>
                <>
                  <DialogTrigger asChild>
                    <div className="flex gap-2 items-center">
                      <Plus className="border rounded-full w-6 h-6 p-1" />{" "}
                      დაამატე აგენტი
                    </div>
                  </DialogTrigger>
                </>
              </AddAgentModal>
            </SelectLabel>
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
            {/* <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
