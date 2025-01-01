import { ReactNode } from "react";
import { ScrollArea } from "../ui/scroll-area";
import ServerItem from "./server-item";

function ServerList({ children }: { children: ReactNode }) {
  return (
    <ScrollArea className=" justify-center rounded-md ">
      <div className="flex flex-col items-center  w-max px-3 h-screen gap-5">
        {children}
      </div>
    </ScrollArea>
  );
}
export default ServerList;
