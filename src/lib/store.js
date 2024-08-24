"use client";
import { configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./features/incomeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      income: incomeSlice,
    },
  });
};
