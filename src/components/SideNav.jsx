import React from "react";
import Users from "./Users";

const SideNav = () => {
  return (
    <div className="w-[25%] h-full bg-white">
      <div className="w-full h-[10vh] flex bg-zinc-400">
        <form className="w-full flex items-center gap-2 px-2">
          <input
            type="text"
            placeholder="search . . ."
            className="w-full px-2 py-2 rounded-md border border-zinc-600 outline-none text-lg"
          />
          <button className="hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-md bg-zinc-600">
            <i class="ri-search-line text-lg"></i>
          </button>
        </form>
      </div>
      <Users />
    </div>
  );
};

export default SideNav;
{
  /* <input
            type="text"
            placeholder="search . . ."
            className="w-full px-2 py-2 border-none outline-none bg-transparent text-lg"
          /> */
}

//   <i class="ri-search-line text-[1.4rem]"></i>
