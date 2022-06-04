import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./thunks/thunk";
import userSlice from "./slices/userSlice";
import messagerSlice from "./slices/messagerSlice"
import { rootReducer } from ".";

export const store = configureStore({
   //reducer: rootReducer,
   reducer: {
      user: userSlice,
      post: postSlice,
      massages: messagerSlice
   },
   middleware:  getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false
  })
})
