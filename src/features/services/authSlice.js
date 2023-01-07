import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
