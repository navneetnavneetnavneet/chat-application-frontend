import React from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    <div className="w-full py-2 px-2 border-b border-zinc-600 flex items-center gap-2">
      <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={selectedUser && selectedUser.profileImage.url} alt="" />
      </div>
      <div className="">
        <h1 className="text-xl font-semibold leading-5">
          {selectedUser && selectedUser.fullName}
        </h1>
        <p className="text-sm md:text-xs font-semibold leading-5">
          {onlineUsers && onlineUsers.includes(selectedUser?._id)
            ? "online"
            : "offline"}
        </p>
      </div>
    </div>
  );
};

export default TopNav;
