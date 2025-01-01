import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function ServerItem({ name }: { name: string }) {
  return (
    <Avatar className="h-12 w-12 relative">
      <AvatarImage src="/avatar.jpg" className="w-full h-full" />
      <AvatarFallback> {name} </AvatarFallback>
    </Avatar>
  );
}
export default ServerItem;
