"use client";

import MainChat from "@/app/core/components/main-chat/main-chat";
import { useUser } from "@/context/hooks/useUser";

function ChatMain() {
  const { handleGetUser } = useUser();

  console.log(handleGetUser());
  return <MainChat />;
}
export default ChatMain;
