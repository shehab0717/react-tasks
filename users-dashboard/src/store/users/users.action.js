import { getUsers, getUser } from "./users.service";
import userActionTypes from "./users.types";

function fetchUsersStart() {
    console.log('fetching users...');
    return {
        type: userActionTypes.FETCH_USERS_START
    }

}
function fetchUsersSuccess(users) {
    console.log('fetch users succeeded');
    return {
        type: userActionTypes.FETCH_USERS_SUCCESS,
        payload: users
    }

}
function fetchUsersFailure(errorMessage) {
    console.log('fetch users failed');
    return {
        type: userActionTypes.FETCH_USERS_FAIL,
        payload: errorMessage
    }

}
function fetchUserStart() {
    console.log('fetching user...');
    return {
        type: userActionTypes.FETCH_USER_START
    }

}
function fetchUserSuccess(user) {
    console.log('fetch user succeeded');
    return {
        type: userActionTypes.FETCH_USER_SUCCESS,
        payload: user
    }

}
function fetchUserFailure(errorMessage) {
    console.log('fetch user failed');
    return {
        type: userActionTypes.FETCH_USER_FAIL,
        payload: errorMessage
    }

}
export const fetchUsers = (pageNumber, limit) => async (dispatch) => {
    dispatch(fetchUsersStart());
    try {
        const users = await getUsers(pageNumber, limit);
        console.log(users);
        dispatch(fetchUsersSuccess(users));
    }
    catch (error) {
        dispatch(fetchUsersFailure("Error: can't fetch users!"));
    }
};


export const fetchUser = (userId) => async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const user = await getUser(userId);
        console.log(user);
        dispatch(fetchUserSuccess(user));
    }
    catch (error) {
        dispatch(fetchUserFailure("Error: can't fetch this!"));
    }
};


export function startEditing(userId){
    return {
        type: userActionTypes.START_EDITING,
        payload: userId,
    }
}
export function doneEditing(){
    return {
        type: userActionTypes.DONE_EDITING
    }
}