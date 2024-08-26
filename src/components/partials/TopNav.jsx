import React from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    <div className="w-full h-[10vh] px-2 border-b border-zinc-600 flex items-center gap-2">
      <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
        <img src={selectedUser && selectedUser.profileImage.url} alt="" />
      </div>
      <div className="">
        <h1 className="text-xl font-semibold leading-3">
          {selectedUser && selectedUser.fullName}
        </h1>
        <p className="text-sm font-semibold">
          {onlineUsers && onlineUsers.includes(selectedUser?._id)
            ? "online"
            : "offline"}
        </p>
      </div>
    </div>
  );
};

export default TopNav;
