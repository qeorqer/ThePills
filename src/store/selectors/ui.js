import { createSelector } from "@reduxjs/toolkit";

const uiISlice = (state) => state.ui;

export const selectIsBottomSheetOpen = createSelector(uiISlice, (ui) => ui.addReminderModalOpen);
