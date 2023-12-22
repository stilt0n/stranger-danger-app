import { useState } from "react";
import { ChatContainer } from "./ChatContainer";
import { ChatMessage, Message } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

export const Chat = (props: { className: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(0);
  const onCommit = (value: string) => {
    setMessages([
      ...messages,
      { id: nextId, postedAt: new Date(), text: value },
    ]);
    setNextId((prev) => prev + 1);
  };

  return (
    <div className={props.className}>
      <ChatContainer>
        {messages.length
          ? messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          : null}
      </ChatContainer>
      <ChatInput onCommit={onCommit} />
    </div>
  );
};
