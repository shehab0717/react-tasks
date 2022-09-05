import APIClient from "../../utils/apiClient";
import { getUsers } from "./users.service";
import userActionTypes from "./users.types";

function fetchUsersStart() {
    console.log('fetching users...');
    return {
        type: userActionTypes.FETCH_USERS_START
    }

}
function fetchUsersSuccess(usersData) {
    console.log('fetch users succeeded');
    console.log(usersData);
    return {
        type: userActionTypes.FETCH_USERS_SUCCESS,
        payload: usersData
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
        dispatch(fetchUsersSuccess(users.data));
    }
    catch(error){
        dispatch(fetchUsersFailure("Error: can't fetch users!"));
    }
};
