import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import ChatPage from "../components/ChatPage";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Edit from "../components/Edit";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllUser, asyncLoadUser } from "../store/actions/userActions";
import { allUser, setOnlineUsers } from "../store/reducers/userSlice";
import ForgetPassword from "../components/ForgetPassword";
import NewPassword from "../components/NewPassword";
import { asyncGetAllStatus } from "../store/actions/statusActions";
import StatusShow from "../components/partials/StatusShow";
import StatusUpload from "../components/partials/StatusUpload";
import { setAllStatus } from "../store/reducers/statusSlice";
import { setMessages } from "../store/reducers/messageSlice";
import { SocketContext } from "../context/socketContext";

const MainRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { socket, setSocket } = useContext(SocketContext);

  const { isAuthenticated, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadUser());
    dispatch(asyncGetAllUser());
    dispatch(asyncGetAllStatus());

    isAuthenticated && navigate("/");
    !isAuthenticated && navigate("/signin");

    return () => {
      dispatch(allUser([]));
      dispatch(setOnlineUsers([]));
      dispatch(setAllStatus([]));
      dispatch(setMessages([]));

      setSocket(socket);
    };
  }, [isAuthenticated, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<ChatPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/users/forget-link/:userId" element={<NewPassword />} />
        <Route path="/status/:userId" element={<StatusShow />} />
        <Route path="/status/upload" element={<StatusUpload />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
