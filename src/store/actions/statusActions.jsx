import { toast } from "react-toastify";
import axios from "../../utils/axios";
import { setAllStatus } from "../reducers/statusSlice";
import { asyncLoadUser } from "./userActions";

export const asyncGetAllStatus = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/status");
    dispatch(setAllStatus(data.allStatus));
  } catch (error) {
    toast.error(error.response.data);
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
    dispatch(asyncLoadUser());
    try {
    } catch (error) {
      toast.error(error.response.data);
    }
  };

export const asyncDeleteStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/status/delete/${id}`);
    dispatch(asyncGetAllStatus());
    dispatch(asyncLoadUser());
  } catch (error) {
    toast.error(error.response.data);
  }
};
