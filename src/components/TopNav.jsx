import React from "react";

const TopNav = () => {
  return (
    <div className="topnav w-full h-[10vh] bg-zinc-600 flex items-center text-white">
      <div className="user w-full px-2 py-2 flex items-center gap-2 border-b border-zinc-600">
        <div className="w-[3vw] h-[3vw] bg-red-900 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="" alt="" />
        </div>
        <div className="">
          <h1 className="text-lg font-semibold leading-none">Username</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
