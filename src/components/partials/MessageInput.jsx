import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";
import { setMessages } from "../../store/reducers/messageSlice";
import { SocketContext } from "../../context/socketContext";

const MessageInput = ({ selectedUser }) => {
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messageReducer);

  const fileRef = useRef(null);
  const fileHandler = () => {
    fileRef.current.click();
  };

  const [message, setMessage] = useState("");
  const [media, setMedia] = useState("");
  const sendeMessageHandler = async (e) => {
    e.preventDefault();
    if (selectedUser?._id && (message || media)) {
      await dispatch(asyncSendMessage(selectedUser._id, { message, media }));
      setMessage("");
      setMedia("");
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
        <div className="w-full flex items-center bg-white rounded-full px-4">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="message . . ."
            className="w-full px-2 py-3 rounded-full bg-transparent outline-none border-none"
          />
          <input
            onChange={(e) => setMedia(e.target.files[0])}
            ref={fileRef}
            type="file"
            hidden={true}
          />
          <i
            onClick={fileHandler}
            className="ri-attachment-line cursor-pointer"
          ></i>
        </div>
        <button className="px-4 py-3 rounded-full bg-zinc-50">
          <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
