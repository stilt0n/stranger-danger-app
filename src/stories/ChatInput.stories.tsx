import { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "../components/Chat/ChatInput";
import { useState } from "react";

const meta: Meta<typeof ChatInput> = {
  component: ChatInput,
};

type Story = StoryObj<typeof ChatInput>;

const BasicChatInput = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const onCommit = (value: string) => {
    // nice for testing purposes
    if (value === ":clear") {
      setMessages([]);
      return;
    }
    setMessages((prev) => [...prev, value]);
  };
  return (
    <>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <ChatInput onCommit={onCommit} />
    </>
  );
};

export const Basic: Story = {
  render: () => <BasicChatInput />,
};

export default meta;
