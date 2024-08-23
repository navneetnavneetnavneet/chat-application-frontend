import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncSelectedUser } from "../store/actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const { allUser, selectedUser } = useSelector((state) => state.userReducer);

  return (
    <div className="users w-full h-[80vh] cursor-pointer flex flex-col overflow-x-hidden overflow-y-auto">
      {allUser ? (
        allUser.map((user) => (
          <div
            onClick={() => dispatch(asyncSelectedUser(user))}
            key={user._id}
            className={`${
              selectedUser?._id === user?._id ? "bg-zinc-600 text-white" : ""
            } user hover:bg-zinc-600 hover:text-white duration-300 px-2 py-2 flex items-center gap-2 border-b border-zinc-600`}
          >
            <div className="w-[3vw] h-[3vw] bg-red-900 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`${user.profileImage}`}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-lg font-semibold leading-none">
                {user.fullName}
              </h1>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-3xl pt-5 text-center w-full">Loading. . .</h1>
      )}
    </div>
  );
};

export default Users;
