import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const sendeMessageHandler = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className="w-full h-[10vh] border-t border-zinc-600">
      <form
        onSubmit={sendeMessageHandler}
        className="w-full h-full px-2 flex items-center justify-between gap-2"
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="message . . ."
          className="w-full px-2 py-2 rounded-md text-lg outline-none border-none"
        />
        <button className="w-[4vw] h-[4vw] rounded-md bg-zinc-50">^</button>
      </form>
    </div>
  );
};

export default MessageInput;
