"use client";

import { useParams } from "next/navigation";
import ChatHeader from "./chat-header";
import MessageList from "./message-list";
import MessageItem from "./message-item";

function MainChat() {
  const { id } = useParams();
  return (
    <div className="bg-neutral-700 flex-1">
      <ChatHeader name={id.toString()} />
      <div className="">
        <MessageList>
          <MessageItem />
        </MessageList>
      </div>
    </div>
  );
}
export default MainChat;
