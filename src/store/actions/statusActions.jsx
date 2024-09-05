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

export const asyncUploadStatus =
  ({ image }) =>
  async (dispatch, getState) => {
    const { data } = await axios.post(
      "/status/upload",
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(asyncGetAllStatus());
    try {
    } catch (error) {
      console.log(error.response.data);
    }
  };
