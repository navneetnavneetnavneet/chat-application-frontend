import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const { allUser, selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    <div className="w-full h-[80vh] overflow-x-hidden overflow-y-auto">
      {allUser &&
        allUser.map((user) => (
          <Link
            to={`/${user._id}`}
            key={user._id}
            className={`${
              selectedUser?._id === user._id ? "bg-zinc-600 text-white" : ""
            } user w-full py-2 px-2 border-b border-zinc-600 flex items-center gap-2`}
          >
            <div className="w-[4vw] h-[4vw] rounded-full overflow-hidden">
              <img src={user.profileImage.url} alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold leading-3">
                {user.fullName}
              </h1>
              <p className="text-sm font-semibold">
                {onlineUsers && onlineUsers.includes(user?._id) ? "online" : "offline"}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Users;
