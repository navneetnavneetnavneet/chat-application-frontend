import React from "react";
import Users from "./Users";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[25%] h-full bg-zinc-100">
      <div className="w-full h-[10vh] border-b border-zinc-600 flex items-center px-2">
        <h1 className="text-4xl font-bold">WhatsApp</h1>
      </div>
      <Users />
      <div className="w-full h-[10vh] border-t border-zinc-600 flex items-center justify-between px-2">
        <button className="px-4 py-2 rounded-md text-lg font-semibold bg-zinc-500 hover:bg-zinc-600">
          Logout
        </button>
        <Link to="/edit" className="px-4 py-2 rounded-md text-lg font-semibold bg-zinc-500 hover:bg-zinc-600">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
