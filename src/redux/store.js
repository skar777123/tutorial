import { configureStore } from "@reduxjs/toolkit";
import fetched from "./slice/fetch";

export const store = configureStore({
  reducer: {
    data: fetched,
  },
});
