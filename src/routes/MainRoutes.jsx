import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import ChatPage from "../components/ChatPage";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Edit from "../components/Edit";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllUser, asyncLoadUser } from "../store/actions/userActions";
import io from "socket.io-client";
import { setSocket } from "../store/reducers/socketSlice";
import { setOnlineUsers } from "../store/reducers/userSlice";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.userReducer);

  const { socket } = useSelector((state) => state.socketReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/signin");
  }, [isAuthenticated, dispatch]);

  // socket.io
  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:8080", {
        query: {
          userId: user._id,
        },
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      // Clean up socket connection
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [user, dispatch]);

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
