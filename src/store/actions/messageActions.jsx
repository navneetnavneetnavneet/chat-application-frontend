import axios from "../../utils/axios";
import { setMessages } from "../reducers/messageSlice";

export const asyncSelectedUserMessages = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/messages/${id}`);

    dispatch(setMessages(data ? data : []));
    // console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSendMessage = (id, message) => async (dispatch, getState) => {
  try {
    const { messages } = getState().messageReducer;
    const { data } = await axios.post(`/messages/send/${id}`, { message });
    dispatch(setMessages([...messages, data.newMessage]));
    // console.log([...messages, data.newMessage]);
  } catch (error) {
    console.log(error.response.data);
  }
};
