import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  const { selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    <div className="w-full py-2 px-2 border-b-2 border-zinc-400 text-white flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line cursor-pointer"
        ></i>
        <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={selectedUser && selectedUser.profileImage.url}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold leading-5">
            {selectedUser && selectedUser.fullName}
          </h1>
          <p
            className={`${
              onlineUsers && onlineUsers.includes(selectedUser?._id)
                ? "text-green-500"
                : "text-white"
            } text-sm md:text-xs font-semibold leading-5`}
          >
            {onlineUsers && onlineUsers.includes(selectedUser?._id)
              ? "online"
              : "offline"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 text-xl cursor-pointer">
        <i className="ri-phone-line"></i>
        <i className="ri-video-add-line"></i>
      </div>
    </div>
  );
};

export default TopNav;
