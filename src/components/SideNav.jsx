import React from "react";
import Users from "./Users";
import { useDispatch } from "react-redux";
import { asyncSignoutUser } from "../store/actions/userActions";

const SideNav = () => {
  const dispatch = useDispatch();

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
            <i className="ri-search-line text-lg"></i>
          </button>
        </form>
      </div>
      <Users />
      <button
        onClick={() => dispatch(asyncSignoutUser())}
        className="ml-2 mt-5 py-2 px-6 rounded-md text-lg font-semibold bg-zinc-400"
      >
        Logout
      </button>
    </div>
  );
};

export default SideNav;
