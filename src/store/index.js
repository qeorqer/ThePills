import { configureStore } from "@reduxjs/toolkit";

import daysReducer from "./reducers/days";
import uiReducer from "./reducers/ui";

export const store = configureStore({
  reducer: {
    days: daysReducer,
    ui: uiReducer,
  },
});
