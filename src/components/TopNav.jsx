import React from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    selectedUser && (
      <div className="topnav w-full h-[10vh] px-2 py-2 bg-zinc-600 flex items-center text-white">
        <div className="user w-full flex items-center gap-2 border-b border-zinc-600">
          <div className="w-[3vw] h-[3vw] bg-red-900 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`${selectedUser.profileImage}`}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-lg font-semibold leading-none">
              {selectedUser.fullName}
            </h1>
            <p className="text-xs font-semibold">
              {onlineUsers.includes(selectedUser._id) ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default TopNav;
