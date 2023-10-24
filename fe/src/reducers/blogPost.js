import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    searchData: "",
    isLoading: false,
    searchVisible: true,
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
      }
  }});
  
  // Action creators are generated for each case reducer function
  export const { setIsLoading, setSearchData,setSearchVisible, setSearchResultData } = blogPost.actions;
  
  export default blogPost.reducer;