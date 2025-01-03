"use client";

import { useParams } from "next/navigation";
import ChatHeader from "./chat-header";
import MessageList from "./message-list";
import { useState } from "react";

function MainChat() {
  const { id } = useParams();
  const [messages, setMessages] = useState<{ content: string }[]>([]);
  const [message, setMessage] = useState("");

  const handleNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className="bg-neutral-700 flex-1">
      <ChatHeader name={id.toString()} />
      <div className="">
        <MessageList messages={messages} />
        <input
          type="text"
          onKeyDown={(e) => e.key === "Enter" && handleNewMessage(e)}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleNewMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default MainChat;
