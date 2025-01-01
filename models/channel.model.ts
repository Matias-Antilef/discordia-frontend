export type ChannelModel = {
  participants: string[];
  messages: MessageModel[];
};

export type MessageModel = {
  sender: string;
  content: string;
};
