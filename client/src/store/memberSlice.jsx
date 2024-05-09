import { createSlice } from '@reduxjs/toolkit';
import { getMemberAsync } from './post.actions.jsx'

const initialState = {
    members: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
    //items: [],  //stored in the store as "posts.items:
    //: 'idle',  //'idle' | 'loading' | 'success' | 'failed'
    loading: false,
    //isOpen: false,
    //error: null,
    changed: false,
    //user: 'taley'
}

const memberSlice = createSlice({
    name: 'members', //name: 'posts',
    initialState,
    reducers: {
        // openRegister: (state, action) => {
        //     state.isOpen = true;
        // },
        // closeRegister: (state, action) => {
        //     state.isOpen = false;
        // },        
        addMember: (state, action) => {
            const existingMember = state.members.find(member => member.id === action.payload.id)
            if(!existingMember){  
                state.members.unshift(action.payload)  //add to the beginning, entire payload  
            }
  
            state.changed = true
  
            localStorage.setItem("members", JSON.stringify(state.member))  //replaces the state
        },
        editMember: (state, action) => { //this only updates an entry on the form
            const previousMember = state.members.filter(member => member.id !== action.payload.id)
            state.members = [action.payload, ...previousPosts] || [] //send over all previous posts, and updated post
            //| [] ensures structure remains if update results in removing the items array         
  
            localStorage.setItem("items", JSON.stringify(state.items))  
        }, 
        deleteMember: (state, action) => { //applies to post selected for deletion
        const existingMember = state.members.find(member => member.id === action.payload.id)
        if(existingMember){  //if selectedpost exists delete it filter for all other posts
            state.members = state.members.filter(member => member.id !== existingMember.id) || []  
            //| [] ensures structure remains if all is deleted         
        }
        // const previousPosts = state.items.filter(item => item.id !== action.payload.id)
        // state.items = [...previousPosts] //send over all previous posts, not the deleted post

        state.changed = true

        localStorage.setItem("member", JSON.stringify(state.members))  
        }    
    },
    extraReducers: (builder) => {//related to state of thunk    
      builder.addCase(getMemberAsync.pending, (state) => {  //1. first action dispatched from thunk is 'pending' - here we handle action
        state.status = 'loading' //optional state.isLoading = true 
        state.loading = true
        localStorage.setItem("items", JSON.stringify(state.items))                 
      })
      builder.addCase(getMemberAsync.fulfilled, (state, action) => {  //2. second action dispatched from thunk is 'fulfilled' - here we handle action
        state.items = action.payload  //get all previous items
        state.status = 'success'  //optional state.isLoading = false
        state.loading = false
        localStorage.setItem("items", JSON.stringify(state.items))  
      })
      builder.addCase(getMemberAsync.rejected, (state, action) => {  //3. third optional action dispatched from thunk is 'rejected'  - here we handle action
        state.status = 'failed.'   //optional state.isLoading = false     
        state.error = action.error.message
        state.loading = false
      })                     
    },  
})

//export const { openRegister, closeRegister, addMember, editMember, deleteMember } = memberSlice.actions
export const { addMember, editMember, deleteMember } = memberSlice.actions
export default memberSlice.reducer

