import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import messageSlice from "./reducers/messageSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    messageReducer: messageSlice,
  },
});
