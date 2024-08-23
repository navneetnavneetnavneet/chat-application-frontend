import React from "react";
import MessageInput from "./MessageInput";
import Conversation from "./Conversation";
import TopNav from "./TopNav";

const Container = () => {
  return (
    <div className="w-[75%] h-full bg-emerald-200">
      <TopNav />
      <Conversation />
      <MessageInput />
    </div>
  );
};

export default Container;
