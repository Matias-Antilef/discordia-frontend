import { X } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import Link from "next/link";
import { PrivateRoutes, PublicRoutes } from "@/routes/routes";
import AvatarCustom from "../ui/avatar-custom";

function NavItem({ id }: { id: string }) {
  return (
    <Link
      href={`${PrivateRoutes.CHAT}/${id}`}
      className="flex hover:cursor-pointer items-center gap-2 bg-neutral-700 group hover:bg-neutral-600 rounded-lg p-1"
    >
      <AvatarCustom id={id} status="online" />
      <h3 className="flex-1  text-white"> {id} </h3>
      <X className="stroke-neutral-400 group-hover:stroke-white  " />
    </Link>
  );
}
export default NavItem;
