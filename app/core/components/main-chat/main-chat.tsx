"use client";

import { useParams } from "next/navigation";
import ChatHeader from "./chat-header";
import MessageList from "./message-list";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

function MainChat() {
  const { id } = useParams();
  const [messages, setMessages] = useState<{ content: string }[]>([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState<Socket | any>(undefined);
  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);
  const handleNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div className="bg-neutral-700 flex-1">
      <ChatHeader name={id.toString()} />
      <div className="">
        <MessageList messages={messages} />
        <input
          onKeyDown={(e) => e.key === "Enter" && handleNewMessage(e)}
          type="text"
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
