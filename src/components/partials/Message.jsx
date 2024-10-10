import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <div className="mb-4 text-white flex flex-col items-end">
            {message.media && message.media?.url !== "" && (
              <div className="bg-emerald-400 rounded-lg overflow-hidden">
                {message.media?.fileType === "image" && (
                  <img
                    className="w-80 h-80 object-cover"
                    src={message.media?.url}
                    alt=""
                  />
                )}
                {message.media?.fileType === "video" && (
                  <video
                    loop={false}
                    autoPlay={false}
                    muted={true}
                    controls={true}
                    className="w-80 h-80 object-cover"
                    src={message.media?.url}
                    alt=""
                  ></video>
                )}
                {message.media?.fileType === "text" && (
                  <Link
                    target="_blank"
                    to={message.media?.url}
                    className="w-80 bg-zinc-600 flex items-center gap-2 px-2 py-4"
                  >
                    <i className="ri-file-text-line text-[2rem] font-normal"></i>
                    <span className="text-blue-600 text-lg">
                      {message.media?.url.slice(0, 30)}
                    </span>
                  </Link>
                )}
              </div>
            )}
            {message.message.trim() !== "" ? (
              <p className="w-fit mt-1 md:text-2xl bg-[#FA921D] leading-5 md:leading-none px-3 py-2 rounded-tr-lg rounded-es-xl">
                {message.message}
              </p>
            ) : (
              ""
            )}
            <span>
              {new Date(message.createdAt).toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </div>
          <div className="mb-4 w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage.url}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={selectedUser.profileImage.url}
              alt=""
            />
          </div>
          <div className="mb-4 text-white flex flex-col items-start">
            {message.media && message.media?.url !== "" && (
              <div className="bg-emerald-400 rounded-lg overflow-hidden">
                {message.media?.fileType === "image" && (
                  <img
                    className="w-80 h-80 object-cover"
                    src={message.media?.url}
                    alt=""
                  />
                )}
                {message.media?.fileType === "video" && (
                  <video
                    loop={false}
                    autoPlay={false}
                    muted={true}
                    controls={true}
                    className="w-80 h-80 object-cover"
                    src={message.media?.url}
                    alt=""
                  ></video>
                )}
              </div>
            )}
            {message.message.trim() !== "" ? (
              <p className="w-fit bg-[#2383BF] md:text-2xl leading-5 md:leading-none px-3 py-2 rounded-tr-lg rounded-es-xl">
                {message.message}
              </p>
            ) : (
              ""
            )}
            <span>
              {new Date(message.createdAt).toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
