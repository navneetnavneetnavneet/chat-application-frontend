import axios from "../../utils/axios";
import { loadUser, removeUser } from "../reducers/userSlice";

export const asyncLoadUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/currentuser");
    data && dispatch(loadUser(data));
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSignupUser =
  ({ fullName, username, email, password, gender }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/signup", {
        fullName,
        username,
        email,
        password,
        gender,
      });
      console.log(data);

      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSigninUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/signin", {
        email,
        password,
      });
      console.log(data);

      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };
