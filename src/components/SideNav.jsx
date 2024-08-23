import React from "react";
import Users from "./Users";
import { useDispatch } from "react-redux";
import { asyncSignoutUser } from "../store/actions/userActions";
import SearchInput from "./SearchInput";

const SideNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[25%] h-full bg-white">
      <SearchInput />
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
