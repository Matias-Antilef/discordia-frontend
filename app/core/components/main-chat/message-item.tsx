import { useEffect } from "react";
import { io } from "socket.io-client";

function MessageItem({ message }: { message: string }) {
  useEffect(() => {
    const socket = io("http://localhost:3000", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    socket.on("connect_error", (err) => {
      console.error("Error de conexión:", err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <p> {message} </p>;
}

export default MessageItem;
