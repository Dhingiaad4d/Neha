import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:{
        activeTheme:'pink'
    },
    reducers:{
        changeTheme(state,action){
            state.activeTheme=action.payload
        }
    }

})
export const {changeTheme}=themeSlice.actions
export default themeSlice.reducer