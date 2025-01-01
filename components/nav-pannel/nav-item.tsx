import { X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { PublicRoutes } from "@/routes/routes";

function NavItem({ id }: { id: string }) {
  return (
    <Link
      href={`/${PublicRoutes.CHAT}/${id}`}
      className="flex hover:cursor-pointer items-center gap-2 bg-slate-600 group hover:bg-slate-500 rounded-lg p-1"
    >
      <Avatar className="h-12 w-12 relative overflow-visible">
        <AvatarImage
          src="/avatar.jpg"
          className="w-full h-full rounded-full p-1"
        />
        <AvatarFallback> {id} </AvatarFallback>
        <span className="absolute h-4 w-4 rounded-full bg-green-500 right-0 bottom-0" />
      </Avatar>
      <h3 className="flex-1  text-white"> {id} </h3>
      <X className="stroke-slate-300 group-hover:stroke-white hover:stroke-red-500  " />
    </Link>
  );
}
export default NavItem;
