import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();
  const { user, selectedUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    scroll.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [message]);

  return (
    <div
      ref={scroll}
      className={`w-fit max-w-[50%] ${
        user._id === message.senderId ? "ml-auto" : "mr-auto"
      } text-lg flex gap-1`}
    >
      {user._id === message.senderId ? (
        <>
          <p className="bg-red-500 px-4 py-2 mb-1 rounded-tr-lg rounded-es-xl">
            {message.message}
          </p>
          <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
            <img src={user.profileImage} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
            <img src={selectedUser.profileImage} alt="" />
          </div>
          <p className="bg-emerald-500 px-4 py-2 mb-1 rounded-tr-lg rounded-es-xl">
            {message.message}
          </p>
        </>
      )}
    </div>
  );
};

export default Message;
