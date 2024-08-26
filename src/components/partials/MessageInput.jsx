import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";

const MessageInput = ({ selectedUser }) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const sendeMessageHandler = (e) => {
    e.preventDefault();
    dispatch(asyncSendMessage(selectedUser._id, message));
    setMessage("");
  };

  useEffect(() => {
    sendeMessageHandler;
  }, [message, dispatch]);

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
