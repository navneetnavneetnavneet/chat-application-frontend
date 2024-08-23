import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSelectedUserMessages } from "../store/actions/messageActions";

const Conversation = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    selectedUser && dispatch(asyncSelectedUserMessages(selectedUser._id));
  }, [selectedUser]);

  return (
    <div className="conversationArea w-full h-[80vh] overflow-x-hidden overflow-y-auto px-2 py-2">
      {messages &&
        messages.map((message) => (
          <div className="outgoingMessage w-fit bg-red-400 px-2 py-1 mb-1 ml-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
            {message.message}
          </div>
          // <div className="incomingMessage w-fit bg-emerald-400 px-2 py-1 mb-1 mr-auto rounded-tr-lg rounded-es-xl border text-white text-lg">
          //   incoming message
          // </div>
        ))}
    </div>
  );
};

export default Conversation;
