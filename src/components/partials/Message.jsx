import React from "react";

const Message = () => {
  return (
    <div className="w-fit max-w-[50%] ml-auto text-lg">
      <div className="flex gap-1">
        <p className="bg-red-500 px-2 py-2 mb-1 rounded-md">outgoing message</p>
        <div className="w-[4vw] h-[4vw] bg-emerald-300 rounded-full"></div>
      </div>
      <div className="flex gap-1">
        <p className="bg-red-500 px-2 py-2 mb-1 rounded-md">outgoing message</p>
        <div className="w-[4vw] h-[4vw] bg-emerald-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Message;
