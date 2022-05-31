import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userName: '',
   userPhoto: null,
   userStatus: 'Hello',

}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUserName: (state, { payload }) => {
         state.userName = payload
      },

      setUserPhoto: (state, { payload }) => {
         state.userPhoto = payload
      },
      setStatus: (state, { payload }) => {
         state.userStatus = payload
      }
   }
})

export const { setUserName, setUserPhoto, setStatus } = userSlice.actions

export default userSlice.reducer