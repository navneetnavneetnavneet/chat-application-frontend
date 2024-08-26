import React, { useEffect } from "react";
import TopNav from "./TopNav";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/reducers/userSlice";

const Container = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.userReducer);
  const isSelectedUser = allUser && allUser.find((user) => user._id === userId);

  useEffect(() => {
    userId && dispatch(setSelectedUser(isSelectedUser));
  }, [userId]);

  return (
    <div className="w-[75%] h-full">
      <TopNav />
      <MessageContainer />
      <MessageInput />
    </div>
  );
};

export default Container;
