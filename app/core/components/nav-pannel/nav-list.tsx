import { ReactNode } from "react";
import { ScrollArea } from "../../../../components/ui/scroll-area";

function NavList({ children }: { children: ReactNode }) {
  return (
    <ScrollArea className=" justify-center rounded-md ">
      <div className="flex flex-col rounded-lg  w-72 px-3 h-screen gap-1 ">
        {children}
      </div>
    </ScrollArea>
  );
}
export default NavList;
