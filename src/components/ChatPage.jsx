import React from "react";
import SideNav from "./partials/SideNav";
import Container from "./partials/Container";

const ChatPage = () => {
  return (
    <div className="w-full h-screen flex">
      <SideNav />
      <Container />
    </div>
  );
};

export default ChatPage;
