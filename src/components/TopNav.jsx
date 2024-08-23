import React from "react";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { selectedUser } = useSelector((state) => state.userReducer);

  return (
    <div className="topnav w-full h-[10vh] bg-zinc-600 flex items-center text-white">
      {selectedUser && (
        <div className="user w-full px-2 py-2 flex items-center gap-2 border-b border-zinc-600">
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
            <p className="text-xs">Last seen</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
