import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function PropertyDeleteModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-8 text-[#676E76]">
          <button className="px-3 py-2 border border-[#676E76] rounded-xl hover:text-white hover:bg-[#808A93] transition-all">
            ლისტინგის წაშლა
          </button>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white max-w-[623px] py-12 pb-16 ">
        <DialogHeader>
          <DialogTitle className="mx-auto text-[#2D3648]  text-xl">
            გსურთ წაშალოთ ლისტინგი?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="mt-5 mx-auto">
          <DialogClose asChild>
            <Button variant="secondary" type="close">
              გაუქმება
            </Button>
          </DialogClose>
          <Button variant="primary" type="submit">
            დადასტურება
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
