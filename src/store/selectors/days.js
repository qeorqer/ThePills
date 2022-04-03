import { createSelector } from '@reduxjs/toolkit'

const daysISlice = (state) => state.days;

export const selectDays = createSelector(daysISlice, (days) => days.days);
