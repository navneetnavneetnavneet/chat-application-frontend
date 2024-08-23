import React, { useEffect, useRef } from "react";

const Message = ({ message }) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={scroll}
      className={`outgoingMessage w-fit bg-red-400 px-2 py-1 mb-1 ml-auto rounded-tr-lg rounded-es-xl border text-white text-lg`}
    >
      {message.message}
    </div>
  );
};

export default Message;

// <div className="incomingMessage w-fit bg-emerald-400 px-2 py-1 mb-1 mr-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
//   incoming message
// </div>
