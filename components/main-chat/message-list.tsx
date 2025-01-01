import { ReactNode } from "react";

function MessageList({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-blue-500 ">{children}</div>;
    </>
  );
}
export default MessageList;
