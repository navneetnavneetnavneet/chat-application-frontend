import React from "react";
import TopNav from "./TopNav";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";

const Container = () => {
  return (
    <div className="w-[75%] h-full">
      <TopNav />
      <MessageContainer />
      <MessageInput />
    </div>
  );
};

export default Container;
