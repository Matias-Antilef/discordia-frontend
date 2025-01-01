import { ChannelModel } from "./channel.model";

export type ServerModel = {
  name: string;
  description: string;
  channels: ChannelModel[];
};
