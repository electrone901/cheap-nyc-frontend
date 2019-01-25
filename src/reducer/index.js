/******************************************************************************
Title           : Slider.js
Description     : React component that contains all components for the carousel
******************************************************************************/
import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorsReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
})