import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/users.reducer";
import uiReducer from "./UI/ui.reducer";


const allReducers = combineReducers(
    { users: usersReducer, ui: uiReducer }
);

export default allReducers;