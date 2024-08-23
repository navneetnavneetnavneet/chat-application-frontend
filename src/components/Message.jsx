import React, { useEffect, useRef } from "react";

const Message = ({ message, user, selectedUser }) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={scroll}
      className={`outgoingMessage ${
        user._id === message.senderId ? "ml-auto" : "mr-auto"
      } w-fit px-2 py-1 mb-1 rounded-tr-lg rounded-es-xl border text-white text-lg flex items-center gap-2`}
    >
      {user._id === message.senderId ? (
        <>
          <p className="w-fit px-2 py-1 rounded-tr-lg rounded-es-xl bg-red-500">
            {message.message}
          </p>
          <div className="w-10 h-10 bg-red-500 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={user.profileImage} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="w-10 h-10 bg-red-500 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={selectedUser.profileImage} alt="" />
          </div>
          <p className="w-fit px-2 py-1 rounded-tr-lg rounded-es-xl bg-emerald-500">
            {message.message}
          </p>
        </>
      )}
    </div>
  );
};

export default Message;

// <div className="incomingMessage w-fit bg-emerald-400 px-2 py-1 mb-1 mr-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
//   incoming message
// </div>
