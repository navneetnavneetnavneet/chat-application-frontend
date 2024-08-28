import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { messages } = useSelector((state) => state.messageReducer);

  return (
    <div className="w-full h-[85vh] md:max-h-[78vh] px-2 py-2 overflow-x-hidden overflow-y-auto">
      {messages &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
};

export default MessageContainer;
