import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { asyncLoadUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.userReducer);

  console.log(user);

  useEffect(() => {
    dispatch(asyncLoadUser());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/signin");
  }, [isAuthenticated]);

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
