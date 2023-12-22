import { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "../components/Chat/ChatMessage";

const meta: Meta<typeof ChatMessage> = {
  component: ChatMessage,
};

type Story = StoryObj<typeof ChatMessage>;

const shortMessage =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const tallMessage =
  "This should be it's own line\n\n\nSo should this\n\n\nThis one too!";
const superLongMessage =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const postedAt = new Date();

export const Basic: Story = {
  args: {
    message: { text: shortMessage, postedAt, id: 0 },
  },
};

// TODO: Figure out how to handled deliberate multiline messages
export const TallMessage: Story = {
  args: {
    message: { text: tallMessage, postedAt, id: 1 },
  },
};

export const LongMessage: Story = {
  args: {
    message: { text: superLongMessage, postedAt, id: 2 },
  },
};

export default meta;
