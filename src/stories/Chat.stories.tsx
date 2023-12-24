import { Meta, StoryObj } from "@storybook/react";
import { Chat } from "../components/Chat";
import { UserContextMock } from "./decorators/userContextMock";

const meta: Meta<typeof Chat> = {
  component: Chat,
};

type Story = StoryObj<typeof Chat>;

export const Basic: Story = {
  args: {
    className: "h-[40vh]",
  },
  decorators: [UserContextMock],
};

export default meta;
