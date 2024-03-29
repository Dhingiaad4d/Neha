import { configureStore } from '@reduxjs/toolkit';
import auth from "./reducers/AuthSlice"
import  changeTheme from './reducers/ThemeSlice';
const store=configureStore({
    reducer:{
        auth:auth,
        theme:changeTheme
    }
})

export default store;
