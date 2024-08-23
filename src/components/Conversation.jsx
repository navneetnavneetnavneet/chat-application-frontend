import { useDispatch, useSelector } from "react-redux";
import { asyncSelectedUserMessages } from "../store/actions/messageActions";
import Message from "./Message";
import { useEffect } from "react";

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
          <Message key={message._id} message={message} />
        ))}
    </div>
  );
};

export default Conversation;
