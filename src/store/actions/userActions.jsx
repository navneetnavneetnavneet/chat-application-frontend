import axios from "../../utils/axios";
import {
  loadUser,
  removeUser,
  allUser,
  setSelectedUser,
} from "../reducers/userSlice";

export const asyncLoadUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/users/currentuser");
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
      const { data } = await axios.post("/users/signup", {
        fullName,
        username,
        email,
        password,
        gender,
      });
      //   console.log(data);

      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSigninUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/users/signin", {
        email,
        password,
      });
      //   console.log(data);

      dispatch(asyncLoadUser());
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const asyncSignoutUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/users/signout");
    dispatch(removeUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncGetAllUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/users/");
    dispatch(allUser(data.alluser));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncSelectedUser = (user) => async (dispatch, getState) => {
  try {
    dispatch(setSelectedUser(user));
  } catch (error) {
    console.log(error.response.data);
  }
};
