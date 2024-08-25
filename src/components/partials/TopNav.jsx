import React from "react";

const TopNav = () => {
  return (
    <div className="w-full h-[10vh] px-2 border-b border-zinc-600 flex items-center gap-2">
      <div className="w-[4vw] h-[4vw] rounded-full bg-red-300"></div>
      <div className="">
        <h1 className="text-xl font-semibold leading-3">Username</h1>
        <p className="text-sm font-semibold text-zinc-600">online</p>
      </div>
    </div>
  );
};

export default TopNav;
