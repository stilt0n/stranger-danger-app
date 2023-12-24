export interface Message {
  id: number;
  text: string;
  postedAt?: Date;
}

export interface ChatMessageProps {
  message: Message;
  userName: string;
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

export const ChatMessage = ({ message, userName }: ChatMessageProps) => {
  return (
    <div className="hover:bg-gray-200 w-full">
      <p className="tex-grey-600 text-xs">{userName}</p>
      <p title={getPostedAtTooltip(message.postedAt)}>{message.text}</p>
    </div>
  );
};
