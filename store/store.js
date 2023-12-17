// Core
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import counter from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter,
  },
});