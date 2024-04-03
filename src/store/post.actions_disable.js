import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = "https://fakestoreapi.com/users"

export const getMemberAsync = createAsyncThunk(
    'members/getMemberAsync',
    async () => {
        try {
            const resp = await axios.get(url);
            return await resp.data
            return results

        } catch(error){
            return error.messagae
        }
    }    
)