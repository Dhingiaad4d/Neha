import { useReducer } from "react";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {useSelector} from "react-redux"

import { loginApi } from "../action/Auth";


export const fetchLogin = createAsyncThunk("auth", async(data)=>{
    try{
        const response=await loginApi(data);
        return response;
     }
     catch(error){
        console.log(error,"error message")
     }
})

 export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticate:false,
        logindata:'',
        token:''
    },
    reducers:{
        login(state,action){
            state.isAuthenticate=true;
            state.logindata=action.payload
            state.token=action.payload.token
        },
        logout(state){
            state.isAuthenticate=false;
            state.token=null
        }
    }
})
export const {login,logout}=authSlice.actions
export default authSlice.reducer