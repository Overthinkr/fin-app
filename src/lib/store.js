"use client";
import { configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./features/incomeSlice";
import expenseSlice from "./features/expenseSlice";
import savingSlice from "./features/savingSlice";
import budgetSlice from "./features/budgetSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      income: incomeSlice,
      expense: expenseSlice,
      saving: savingSlice,
      budget: budgetSlice,
    },
  });
};
