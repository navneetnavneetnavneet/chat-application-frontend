import React from "react";
import Users from "./Users";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignoutUser } from "../../store/actions/userActions";
import Status from "./Status";

const SideNav = () => {
  const dispatch = useDispatch();
  const { allStatus } = useSelector((state) => state.statusReducer);
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="w-full relative md:w-[25%] h-full bg-zinc-100 md:flex md:flex-col">
      <div className="w-full py-2 border-b border-zinc-400 flex items-center px-4">
        <h1 className="text-[9vw] md:text-[2.7vw] font-bold">WhatsApp</h1>
      </div>
      <div className="w-full py-3 border-b border-zinc-400 flex items-center justify-items-start gap-x-2 px-4 overflow-x- overflow-y-hidden whitespace-nowrap">
        {user?.status.length === 0 ? <Status user={user} /> : ""}
        {allStatus &&
          allStatus.map((status) => (
            <Status key={status._id} user={status.user} />
          ))}
      </div>
      <Users />
      <div className="w-full absolute bottom-0 py-4 md:py-3 flex items-center justify-between px-4">
        <button
          onClick={() => dispatch(asyncSignoutUser())}
          className="px-4 py-2 rounded-md text-lg font-semibold bg-zinc-500 hover:bg-zinc-600"
        >
          Logout
        </button>
        <Link
          to="/edit"
          className="px-4 py-2 rounded-md text-lg font-semibold bg-zinc-500 hover:bg-zinc-600"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
