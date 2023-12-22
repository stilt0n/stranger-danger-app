export interface Message {
  id: number;
  text: string;
  postedAt?: Date;
}

export interface ChatMessageProps {
  message: Message;
}

// This feature might actually end up being annoying
const getPostedAtTooltip = (date: Date | undefined) => {
  if (date) {
    return `Posted on ${date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`;
  }
};

export const ChatMessage = ({ message }: ChatMessageProps) => (
  <p
    className="hover:bg-gray-200 w-full"
    title={getPostedAtTooltip(message.postedAt)}
  >
    {message.text}
  </p>
);
