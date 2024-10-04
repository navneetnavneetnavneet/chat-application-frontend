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
          <div className="mb-4">
            <p className="w-fit bg-[#FA921D] text-white leading-5 md:leading-4 px-3 py-2 rounded-tr-lg rounded-es-xl">
              {message.message}
            </p>
            <div className="flex justify-end items-center gap-x-2">
              <span>
                {new Date(message.createdAt).toLocaleTimeString("en-IN", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="mb-4 w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={selectedUser.profileImage.url}
              alt=""
            />
          </div>
          <div className="mb-4">
            <p className="w-fit bg-[#2383BF] text-white leading-5 md:leading-4 px-3 py-2 rounded-tr-lg rounded-es-xl">
              {message.message}
            </p>
            <div className="flex justify-start items-center gap-x-2">
              <span>
                {new Date(message.createdAt).toLocaleTimeString("en-IN", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
