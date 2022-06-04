import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userName: '',
   userPhoto: null,
   userStatus: 'Hello',
   userLogout: 'user',

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
      },
      
      setUserLogout: (state, { payload }) => {
         state.userLogout = payload
      }
   }
})

export const userSelector = state => state.user.user
export const { setUserName, setUserPhoto, setStatus, setUserLogout } = userSlice.actions

export default userSlice.reducer