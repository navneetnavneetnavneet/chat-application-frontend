import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { user, selectedUser } = useSelector((state) => state.userReducer);

  return (
    <div
      className={`w-fit max-w-[50%] ${
        user._id === message.senderId ? "ml-auto" : "mr-auto"
      } text-lg flex gap-1`}
    >
      {user._id === message.senderId ? (
        <>
          <p className="bg-red-500 px-2 py-2 mb-1 rounded-md">
            {message.message}
          </p>
          <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
            <img src={user.profileImage} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
            <img src={user.profileImage} alt="" />
          </div>
          <p className="bg-emerald-500 px-2 py-2 mb-1 rounded-md">
            {message.message}
          </p>
        </>
      )}
    </div>
  );
};

export default Message;
