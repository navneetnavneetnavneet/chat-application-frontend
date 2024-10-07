import React, { useEffect } from "react";
import TopNav from "./TopNav";
import MessageContainer from "./MessageContainer";
import MessageInput from "./MessageInput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/reducers/userSlice";
import { asyncSelectedUserMessages } from "../../store/actions/messageActions";

const Container = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.userReducer);
  const isSelectedUser = allUser && allUser.find((user) => user._id === userId);

  useEffect(() => {
    if (userId && isSelectedUser) {
      dispatch(setSelectedUser(isSelectedUser));
      dispatch(asyncSelectedUserMessages(isSelectedUser?._id));
    }
  }, [userId, isSelectedUser,dispatch]);

  return (
    <div className="w-full md:w-[100%] h-full relative">
      <TopNav />
      <MessageContainer />
      <MessageInput selectedUser={isSelectedUser} />
    </div>
  );
};

export default Container;
