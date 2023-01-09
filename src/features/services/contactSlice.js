import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: []
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = action.payload.contacts;
    }
  }
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
