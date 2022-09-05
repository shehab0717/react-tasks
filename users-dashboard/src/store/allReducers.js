import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/users.reducer";


const allReducers = combineReducers(
    { users: usersReducer }
);

export default allReducers;