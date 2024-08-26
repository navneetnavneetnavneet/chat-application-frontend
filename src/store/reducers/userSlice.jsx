import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  allUser: null,
  selectedUser: null,
  onlineUsers: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.selectedUser = null;
    },
    allUser: (state, action) => {
      state.allUser = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const {
  loadUser,
  removeUser,
  allUser,
  setSelectedUser,
  setOnlineUsers,
} = userSlice.actions;
export default userSlice.reducer;
