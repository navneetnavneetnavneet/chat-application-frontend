import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { asyncGetAllUser, asyncLoadUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/signin");
  }, [isAuthenticated]);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:8080", {});
      setSocket(socket);
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
