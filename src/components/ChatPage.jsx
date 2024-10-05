import React from "react";
import Container from "./partials/Container";
import bgImage from "../../public/bg.jpg";

const ChatPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex"
    >
      <Container />
    </div>
  );
};

export default ChatPage;
