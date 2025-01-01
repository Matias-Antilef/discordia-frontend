import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

function ChatHeader({ name }: { name: string }) {
  return (
    <div className="bg-slate-700 py-2 flex items-center text-white">
      <Avatar className="h-12 w-12 relative overflow-visible">
        <AvatarImage
          src="/avatar.jpg"
          className="w-full h-full rounded-full p-1"
        />
        <AvatarFallback> {name} </AvatarFallback>
        <span className="absolute h-4 w-4 rounded-full bg-green-500 right-0 bottom-0" />
      </Avatar>
      <h1>{name} </h1>
    </div>
  );
}
export default ChatHeader;
