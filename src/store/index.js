import { configureStore } from "@reduxjs/toolkit";

import daysReducer from "./reducers/days";

export const store = configureStore({
  reducer: {
    days: daysReducer,
  },
});
