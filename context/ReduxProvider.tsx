import { ReactNode } from "react";

function ReduxProvider({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
export default ReduxProvider;
