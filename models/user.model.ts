import { ServerModel } from "./server.model";

export type UserModel = {
  username: string;
  email: string;
  servers: ServerModel[];
  friends: FriendModel[];
};

export type FriendModel = {
  username: string;
};
