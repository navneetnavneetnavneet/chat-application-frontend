import React from "react";

const MessageInput = () => {
  return (
    <div className="messageInput w-full h-[10vh] bg-zinc-600 px-2 flex items-center   ">
      <form className="w-full flex items-center gap-2 relative">
        <input
          type="text"
          placeholder="message . . ."
          className="w-full px-4 py-3 rounded-md text-lg font-semibold outline-none border-none"
        />
        <button className="absolute right-0 px-4 py-3 rounded-md text-lg font-semibold">
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
