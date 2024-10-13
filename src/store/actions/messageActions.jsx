import axios from "../../utils/axios";
import { setMessages } from "../reducers/messageSlice";
import { toast } from "react-toastify";

export const asyncSelectedUserMessages = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/messages/${id}`);

    dispatch(setMessages(data ? data : []));
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const asyncSendMessage =
  (id, { message, media }) =>
  async (dispatch, getState) => {
    try {
      const { messages } = getState().messageReducer;
      const { data } = await axios.post(
        `/messages/send/${id}`,
        {
          message,
          media,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(data);

      dispatch(setMessages([...messages, data.newMessage]));
    } catch (error) {
      toast.error(error.response.data);
    }
  };
