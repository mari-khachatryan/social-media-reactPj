import { useReducer } from "react";
import { combineReducers } from "redux";
import messageReducer from "./slices/messagerSlice"


export const rootReducer = combineReducers({
    // user: useReducer,
    // massages: messageReducer
})

