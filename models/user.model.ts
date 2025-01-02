import { ServerModel } from "./server.model";

export type UserModel = {
  username: string;
  email: string;
  status: "online" | "offline" | "sleeping";
  servers: ServerModel[];
  friends: FriendModel[];
};

export type FriendModel = {
  username: string;
};
