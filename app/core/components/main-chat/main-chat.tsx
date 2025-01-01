"use client";

import { useParams } from "next/navigation";
import ChatHeader from "./chat-header";
import MessageList from "./message-list";
import MessageItem from "./message-item";

function MainChat() {
  const { id } = useParams();
  return (
    <div className="bg-slate-500 flex-1">
      <ChatHeader name={id.toString()} />
      <div className="">
        <MessageList>
          <MessageItem />
        </MessageList>
        <input type="text" placeholder="a" className="flex w-full" />
      </div>
    </div>
  );
}
export default MainChat;
