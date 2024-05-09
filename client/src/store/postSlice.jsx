import { createSlice } from '@reduxjs/toolkit';
import { getPostsAsync } from './post.actions.jsx'

const initialState = {
    //items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
    //items: [],  //stored in the store as "posts.items:
    status: 'idle',  //'idle' | 'loading' | 'success' | 'failed'
    loading: false,
    error: null,
    changed: false,
    user: 'taley'
}

const postSlice = createSlice({
    name: 'posts', //name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {//related to state of thunk    
      builder.addCase(getPostsAsync.pending, (state) => {  //1. first action dispatched from thunk is 'pending' - here we handle action
        state.status = 'loading' //optional state.isLoading = true 
        state.loading = true
        localStorage.setItem("items", JSON.stringify(state.items))                 
      })
      builder.addCase(getPostsAsync.fulfilled, (state, action) => {  //2. second action dispatched from thunk is 'fulfilled' - here we handle action
        state.items = action.payload  //get all previous items
        state.status = 'success'  //optional state.isLoading = false
        state.loading = false
        localStorage.setItem("items", JSON.stringify(state.items))  
      })
      builder.addCase(getPostsAsync.rejected, (state, action) => {  //3. third optional action dispatched from thunk is 'rejected'  - here we handle action
        state.status = 'failed.'   //optional state.isLoading = false     
        state.error = action.error.message
        state.loading = false
      })                     
    },  
})

export const { changed } = postSlice.actions;

export default postSlice.reducer;
