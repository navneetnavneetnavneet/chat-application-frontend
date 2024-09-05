import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const { allUser, selectedUser, onlineUsers } = useSelector(
    (state) => state.userReducer
  );

  return (
    <div className="w-full h-[70vh] overflow-x-hidden overflow-y-auto">
      {allUser &&
        allUser.map((user) => (
          <Link
            to={`/${user._id}`}
            key={user._id}
            className={`${
              selectedUser?._id === user._id ? "bg-zinc-600 text-white" : ""
            } user w-full px-4 py-2 border-b border-zinc-600 flex items-center gap-2`}
          >
            <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.profileImage.url}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-[5vw] md:text-[1.5vw] font-semibold leading-5">
                {user.fullName}
              </h1>
              <p className="text-[3vw] md:text-[.8vw] font-semibold">
                {onlineUsers && onlineUsers.includes(user?._id)
                  ? "online"
                  : "offline"}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Users;
