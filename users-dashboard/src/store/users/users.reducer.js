
import userActionTypes from "./users.types"
const initialState = {
    loading: true,
    usersData: {}, //pageNumber, total, users(Array)
    userDetails: {},
    error: false,
    errorMessage: '',
}

const usersReducer =  (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS_START:
            return {
                ...state,
                loading: true
            };
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersData: action.payload
            }

        case userActionTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payLoad
            };
        

        default:
            return state;

    }
}

export default usersReducer;