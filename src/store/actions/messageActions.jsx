import axios from "../../utils/axios";
import { setMessages } from "../reducers/messageSlice";

export const asyncSelectedUserMessages = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/messages/${id}`);
    dispatch(setMessages(data));
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
