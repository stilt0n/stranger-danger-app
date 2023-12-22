import { ChangeEvent, KeyboardEvent, useState } from "react";

export interface ChatInputProps {
  onCommit: (value: string) => void;
}

export const ChatInput = (props: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onInputCommit = () => {
    props.onCommit(inputValue);
    setInputValue("");
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onInputCommit();
    }
  };

  return (
    <div className="container-xl flex">
      <input
        // TODO: Create design tokens for colors in `tailwind.config.js` for consistent theming
        className="border rounded border-gray-800 border-solid focus:border-2 px-1.5 w-5/6 drop-shadow-md"
        onChange={onInputChange}
        onKeyUp={onKeyUp}
        value={inputValue}
      />
      <button
        className="bg-gray-400 ml-2 px-1 drop-shadow-md rounded"
        onClick={onInputCommit}
      >
        Send
      </button>
    </div>
  );
};
