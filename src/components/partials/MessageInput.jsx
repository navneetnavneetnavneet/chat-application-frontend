import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";
import { setMessages } from "../../store/reducers/messageSlice";

const MessageInput = ({ selectedUser }) => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socketReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState("");
  const sendeMessageHandler = (e) => {
    e.preventDefault();
    dispatch(asyncSendMessage(selectedUser._id, message));
    setMessage("");
  };

  useEffect(() => {
    sendeMessageHandler;

    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
  }, [messages, socket, setMessages]);

  return (
    <div className="w-full h-[10vh] border-t border-zinc-600">
      <form
        onSubmit={sendeMessageHandler}
        className="w-full h-full px-2 flex items-center justify-between gap-2"
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="message . . ."
          className="w-full px-2 py-2 rounded-md text-lg outline-none border-none"
        />
        <button className="px-4 py-2 rounded-md bg-zinc-50">
          <i className="ri-send-plane-2-fill text-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
