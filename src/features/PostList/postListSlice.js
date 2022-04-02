import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loadAllPosts = createAsyncThunk(
    'postList/loadAllPosts',
    async (subreddit) => {
        const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
         const json = await data.json();
        return json.data.children.map(post => post.data)
    }
)

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
        isLoadingPost: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadAllPosts.pending, (state) => {
            state.isLoadingPost = true;
            state.hasError = false;
        })
        .addCase(loadAllPosts.fulfilled, (state, action) => {
            state.isLoadingPost = false;
            state.hasError = false;
            state.posts = action.payload;
        })
        .addCase(loadAllPosts.rejected, (state) => {
            state.isLoadingPost = false;
            state.hasError = true;
            state.posts = []
        })
    }
})

export const selectAllPosts = (state) => state.postList.posts;
export const isLoading = (state) => state.postList.isLoadingPost;
export const hasError = (state) => state.postList.hasError;
export default postListSlice.reducer