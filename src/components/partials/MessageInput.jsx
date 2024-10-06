import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";
import { setMessages } from "../../store/reducers/messageSlice";
import { SocketContext } from "../../context/socketContext";

const MessageInput = ({ selectedUser }) => {
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState("");
  const sendeMessageHandler = (e) => {
    e.preventDefault();
    if (selectedUser?._id && message) {
      dispatch(asyncSendMessage(selectedUser._id, message));
      setMessage("");
    }
  };

  useEffect(() => {
    sendeMessageHandler;

    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
  }, [messages, socket, setMessages]);

  return (
    <div className="w-full py-2 absolute bottom-0">
      <form
        onSubmit={sendeMessageHandler}
        className="w-full h-full px-2 flex items-center justify-between gap-2 text-xl font-semibold"
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="message . . ."
          className="w-full px-4 py-3 rounded-full outline-none border-none"
        />
        <button className="px-4 py-3 rounded-full bg-zinc-50">
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
