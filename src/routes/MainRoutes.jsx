import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ChatPage from "../components/ChatPage";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Edit from "../components/Edit";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<ChatPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
