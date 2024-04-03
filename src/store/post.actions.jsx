import { createAsyncThunk } from '@reduxjs/toolkit';
//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

//GET ALL - .get(`/posts`) on FE and save in /store/postSlice.jsx  
export const getPostsAsync = createAsyncThunk(  //use this instead of fetchData
   'posts/getPostsAsync', //actiontype 
    async() => {   //payload creator callback that returns a promise that returns response data or error - this promise returns lifecycle actions (pending, fulfilled, rejected) 
      try {  //get posts on localhost:4000/posts refers to refers to `https://jsonplaceholder.typicode.com/posts` 
        const response = await axios.get(`http://localhost:4000/posts`); 
        //const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`); 
        //const response = await axios.get(`/posts`); 
        //console.log({'get': response?.data?.json()});
        return await response?.data  //return entire payload  
      } catch(error){
        return error.message
      }
   }
)

const url = "https://fakestoreapi.com/users"

export const getMemberAsync = createAsyncThunk(
    'members/getMemberAsync',
    async () => {
        try {
            const resp = await axios.get(url);
            return await resp.data
            return results

        } catch(error){
            return error.message
        }
    }    
)

