import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import ChatPage from "../components/ChatPage";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Edit from "../components/Edit";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllUser, asyncLoadUser } from "../store/actions/userActions";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/signin");
  }, [isAuthenticated]);

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
