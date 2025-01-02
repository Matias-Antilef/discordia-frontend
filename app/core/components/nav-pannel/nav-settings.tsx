import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PrivateRoutes } from "@/routes/routes";
import { Headphones, Mic, Settings } from "lucide-react";
import Link from "next/link";

function NavSettings() {
  return (
    <div className="sticky flex  py-1 px-2 h-14 gap-2 justify-between bottom-0  right-0 bg-neutral-950 w-full">
      <div className="flex  items-center gap-2 hover:bg-slate-800 p-3 rounded-lg transition-colors">
        <Avatar>
          <AvatarImage src="/avatar.jpg" className="p-1 rounded-full" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-white">Shall</h1>
      </div>
      <div className="flex flex-1 justify-around items-center h-full  ">
        <Mic className="stroke-white cursor-pointer h-full hover:bg-slate-800 p-3 flex-1 rounded-lg transition-colors " />
        <Headphones className="stroke-white cursor-pointer h-full hover:bg-slate-800 p-3 flex-1 rounded-lg transition-colors " />
        <Link
          href={PrivateRoutes.ACCOUNT}
          className=" cursor-pointer h-full hover:bg-slate-800 p-3 flex-1 rounded-lg transition-colors "
        >
          <Settings className="stroke-white" />
        </Link>
      </div>
    </div>
  );
}
export default NavSettings;
