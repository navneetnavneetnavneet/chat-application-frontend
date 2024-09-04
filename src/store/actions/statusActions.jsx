import axios from "../../utils/axios";
import { setAllStatus } from "../reducers/statusSlice";

export const asyncGetAllStatus = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/status");
    console.log(data.allStatus);

    dispatch(setAllStatus(data.allStatus));
  } catch (error) {
    console.log(error.response.data);
  }
};
