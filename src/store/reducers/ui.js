import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addReminderModalOpen: false
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleReminderModal: (state, action) => {
      state.addReminderModalOpen = !state.addReminderModalOpen;
    },
  },
});

export const { toggleReminderModal } = uiSlice.actions;

export default uiSlice.reducer;
