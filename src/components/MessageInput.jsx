import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncSendMessage } from "../store/actions/messageActions";
import { setMessages } from "../store/reducers/messageSlice";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { socket } = useSelector((state) => state.socketReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  const sendMessageHandler = (e) => {
    e.preventDefault();

    selectedUser && dispatch(asyncSendMessage(selectedUser._id, message));
    setMessage("");
  };

  // useEffect(() => {
  // }, [message]);
  
  // send and receive message
  useEffect(() => {
    sendMessageHandler;
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
  }, [socket, messages, setMessages]);

  return (
    <div className="messageInput w-full h-[10vh] bg-zinc-600 px-2 flex items-center   ">
      <form
        onSubmit={sendMessageHandler}
        className="w-full flex items-center gap-2 relative"
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="message . . ."
          className="w-full px-4 py-3 rounded-md text-lg font-semibold outline-none border-none"
        />
        <button className="absolute right-0 px-4 py-3 rounded-md text-lg font-semibold">
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
