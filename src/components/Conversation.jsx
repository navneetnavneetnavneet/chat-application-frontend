import React from "react";

const Conversation = () => {
  return (
    <div className="conversationArea w-full h-[80vh] overflow-x-hidden overflow-y-auto px-2 py-2">
      <div className="outgoingMessage w-fit bg-red-400 px-2 py-1 mb-1 ml-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
        outgoing message
      </div>
      <div className="incomingMessage w-fit bg-emerald-400 px-2 py-1 mb-1 mr-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
        incoming message
      </div>
    </div>
  );
};

export default Conversation;
