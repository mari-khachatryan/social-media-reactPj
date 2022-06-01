import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./thunk";
import userSlice from "./userSlice";

export const store = configureStore({
   reducer: {
      user: userSlice,
      post: postSlice,
   }
})