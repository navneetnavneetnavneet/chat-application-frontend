import React from "react";
import SideNav from "./partials/SideNav";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <div className="w-full h-screen flex">
      <SideNav />
      <div className="w-[75%] h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-zinc-400">
          Hello, {user && user.fullName}!
        </h1>
        <p className="text-2xl font-semibold text-zinc-400">
          Let's start conversation.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
