import { createSlice } from "@reduxjs/toolkit";

const daysInit = [
  { id: 1, name: "Monday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 2, name: "Tuesday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 3, name: "Wednesday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 4, name: "Thursday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 5, name: "Friday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 6, name: "Saturday", reminders: [{ note: "drink watter", time: "8:00am" }] },
  { id: 7, name: "Sunday", reminders: [{ note: "drink watter", time: "8:00am" }] },
];

const initialState = {
  days: daysInit,
  isLoading: false,
  error: null,
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    /*increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },*/
  },
});

export const { increment, decrement, incrementByAmount } = daysSlice.actions;

export default daysSlice.reducer;
