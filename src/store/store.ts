import { configureStore } from "@reduxjs/toolkit";
import { adSlice } from "./ad-slice";

export const store = configureStore({
  reducer: {
    ad: adSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
