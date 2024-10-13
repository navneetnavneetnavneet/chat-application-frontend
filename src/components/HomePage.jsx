import React from "react";
import SideNav from "./partials/SideNav";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const HomePage = () => {
  const { user } = useSelector((state) => state.userReducer);
  return user ? (
    <div className="w-full h-screen flex">
      <SideNav />
      <div className="w-[75%] h-full hidden md:flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-zinc-500 text-center">
          Hello, {user && user.fullName} !
        </h1>
        <p className="text-2xl italic font-semibold text-zinc-400 text-center  ">
          Let's start conversation.
        </p>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default HomePage;
