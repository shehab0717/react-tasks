
import userActionTypes from "./users.types"
const initialState = {
    loading: true,
    usersData: {}, //pageNumber, total, users(Array)
    userDetails: {},
    error: false,
    errorMessage: '',
    pageNumber: 0,
    total: 0,
}

const usersReducer = (state = initialState, action) => {
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
                usersData: action.payload.data,
                pageNumber: action.payload.page + 1,
                total: action.payload.total,
                limit: action.payload.limit,
                totalPages: Math.ceil(action.payload.total / action.payload.limit)
            }

        case userActionTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };


        default:
            return state;

    }
}

export default usersReducer;