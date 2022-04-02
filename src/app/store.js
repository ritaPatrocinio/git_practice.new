import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../features/PostList/postListSlice';
import searchReducer from '../features/Search/searchSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    search: searchReducer
  },
});
