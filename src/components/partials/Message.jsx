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
      className={`w-fit md:max-w-[50%] ${
        user._id === message.senderId ? "ml-auto" : "mr-auto"
      } text-lg md:text-base font-semibold md:font-normal flex items-start justify-between gap-1`}
    >
      {user._id === message.senderId ? (
        <>
          <p className="w-fit mb-2 bg-red-500 leading-5 md:leading-4 px-3 py-2 rounded-tr-lg rounded-es-xl">
            {message.message}
          </p>
          <div className="mb-2 w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-2 w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={selectedUser.profileImage.url}
              alt=""
            />
          </div>
          <p className="mb-2 w-fit bg-emerald-500 leading-5 md:leading-4 px-3 py-2 rounded-tr-lg rounded-es-xl">
            {message.message}
          </p>
        </>
      )}
    </div>
  );
};

export default Message;
