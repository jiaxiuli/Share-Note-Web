/*
 * @Author: 李佳修
 * @Date: 2022-05-12 16:33:13
 * @LastEditTime: 2022-05-12 18:04:59
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/redux/slices/postsSlice.tsx
 */
import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import API from "@aws-amplify/api";
import { listPosts } from "../../graphql/queries";

const initialState = {
    list: [] as any,
    getPostsStatus: "idle",
    getPostsError: '' as any,
  };

export const getPostsAsync = createAsyncThunk(
    "posts/getPosts",
    async () => {
        const response: any = await API.graphql({
            query: listPosts
        });
        return response.data;
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
      // Cases for status of getProfile (pending, fulfilled, and rejected)
      .addCase(getPostsAsync.pending, (state, action) => {
        state.getPostsStatus = "loading";
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.getPostsStatus = "succeeded";
        //console.log(action);
        state.list = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.getPostsStatus = "failed";
        state.getPostsError = action.error.message;
      })
    }
});

// export const { removeSelectedProfile } = profileSlice.actions;

export default postsSlice.reducer;