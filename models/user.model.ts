import { ServerModel } from "./server.model";

export type UserModel = {
  name: string;
  email: string;
  servers: ServerModel[];
  friends: FriendModel[];
};

export type FriendModel = {
  name: string;
};
