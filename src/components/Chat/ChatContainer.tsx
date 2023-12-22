import { ReactNode, useRef, useEffect } from "react";

/**
 * For now the chat container is just a glorified div with some styles
 * The reason for separating it into its own component is because it
 * will probably need to handle windowing. If chat history gets long
 * storying it all in state is likely to cause lag.
 */
export interface ChatContainerProps {
  children?: ReactNode;
}

export const ChatContainer = ({ children }: ChatContainerProps) => {
  const scrollContainerEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollContainerEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [children]);

  return (
    <div className="flex flex-col overflow-y-scroll w-10/12 h-3/4 position-center">
      {children}
      <div ref={scrollContainerEndRef} />
    </div>
  );
};
