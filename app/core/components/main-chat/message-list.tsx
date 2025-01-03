function MessageList({ messages }: { messages: { content: string }[] }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <p key={index} className="text-white">
          {message.content}
        </p>
      ))}
    </div>
  );
}

export default MessageList;
