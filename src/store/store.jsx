import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import messageSlice from "./reducers/messageSlice";
import socketSlice from "./reducers/socketSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    messageReducer: messageSlice,
    socketReducer: socketSlice,
  },
});
