import React from "react";
import MessageInput from "./MessageInput";
import Conversation from "./Conversation";
import TopNav from "./TopNav";
import { useSelector } from "react-redux";

const Container = () => {
  const { selectedUser } = useSelector((state) => state.userReducer);
  return (
    <div className="w-[75%] h-full bg-zinc-200">
      {selectedUser ? (
        <>
          <TopNav />
          <Conversation />
          <MessageInput />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-3xl font-semibold opacity-50">
            Let's start conversation !
          </h1>
        </div>
      )}
    </div>
  );
};

export default Container;
