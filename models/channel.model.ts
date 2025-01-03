export type ChannelModel = {
  name: string;
  messages: MessageModel[];
  users: string[];
};

export type MessageModel = {
  sender: string;
  content: string;
  timeStamp: Date;
};
