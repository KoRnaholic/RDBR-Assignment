import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

import Region from "../Region";
import AddButton from "../add-agent/AddAgentModal";
import Link from "next/link";
import AddAgentModal from "../add-agent/AddAgentModal";
import { DialogTrigger } from "../ui/dialog";

export default function Filter({
  properties,
  originalProperties,
  setProperties,
  filterState,
  filteredByRegion,
  filteredByBedrooms,
}) {
  return (
    <div className=" flex justify-between items-center">
      <div>
        <Region
          filterState={filterState}
          originalProperties={originalProperties}
          properties={properties}
          setProperties={setProperties}
          filteredByRegion={filteredByRegion}
          filteredByBedrooms={filteredByBedrooms}
        />
      </div>

      <div className="flex gap-4">
        <Link href="/add-property">
          <Button variant="primary" className="flex  ">
            <PlusIcon className="h-4 w-4 text-[#FFFFFF] mr-1" />
            ლისტინგის დამატება
          </Button>
        </Link>

        {/* adding agent */}
        {/* <AddAgentModal /> */}
        <AddAgentModal>
          <DialogTrigger asChild>
            <Button variant="secondary" className="flex  group">
              <PlusIcon className="h-4 w-4 text-[#F93B1D] mr-1 group-hover:text-[#FFFFFF]" />
              აგენტის დამატება
            </Button>
          </DialogTrigger>
        </AddAgentModal>
      </div>
    </div>
  );
}
