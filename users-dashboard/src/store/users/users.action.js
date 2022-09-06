import APIClient from "../../utils/apiClient";
import { getUsers } from "./users.service";
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
export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());
    try{
        const users = await getUsers(1, 20);
        console.log(users);
        dispatch(fetchUsersSuccess(users));
    }
    catch(error){
        dispatch(fetchUsersFailure("Error: can't fetch users!"));
    }
};
