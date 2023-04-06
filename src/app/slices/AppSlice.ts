import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";

const initialState: AppTypeInitialState = {
  toasts: [],
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToasts: (state, action) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { setToasts, clearToasts } = AppSlice.actions;
