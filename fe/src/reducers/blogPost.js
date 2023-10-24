import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    searchData: "",
    isLoading: false,
    searchVisible: true,
    currentPost: "",
    currentComment: "",
    modify: false
}

export const blogPost = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setSearchData: (state,action) => {
        state.searchData = action.payload
      },
      setSearchVisible: (state,action) => {
        state.searchVisible = action.payload
      },
      setCurrentPost: (state,action) => {
        state.currentPost = action.payload
      },
      setCurrentComment: (state,action) => {
        state.currentPost = action.payload
      },
      setModify: (state,action) => {
        state.modify = action.payload
      }
  }});
  
  // Action creators are generated for each case reducer function
  export const { setIsLoading, setSearchData,setSearchVisible, setSearchResultData, setCurrentComment, setCurrentPost, setModify } = blogPost.actions;
  
  export default blogPost.reducer;