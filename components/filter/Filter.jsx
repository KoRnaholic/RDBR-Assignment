import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

import Region from "../Region";
import AddButton from "../add-agent/AddAgentModal";
import Link from "next/link";
import AddAgentModal from "../add-agent/AddAgentModal";

export default function Filter() {
  return (
    <div className=" flex justify-between items-center">
      <div>
        <Region />
      </div>

      <div className="flex gap-4">
        <Link href="/add-property">
          <Button variant="primary" className="flex  ">
            <PlusIcon className="h-4 w-4 text-[#FFFFFF] mr-1" />
            ლისტინგის დამატება
          </Button>
        </Link>

        {/* adding agent */}
        <AddAgentModal />
      </div>
    </div>
  );
}
