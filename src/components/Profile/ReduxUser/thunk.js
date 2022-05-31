import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   posts: [],
}

export const getPosts = createAsyncThunk(
   'posts/getPosts',
   async (url) => {
      const res = await axios.get(url)
      return res.data
   })

export const postSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      setPosts: (state, { payload }) => {
         state.posts = payload
      },

   },
   extraReducers: {
      [getPosts.fulfilled]: (state, { payload }) => {
         state.posts = payload
      },

   }
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer