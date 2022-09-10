
import userActionTypes from "./users.types"


const initialState = {
    loadingUsers: true,
    loadingUser: true,
    creatingUser: false,
    usersData: {},
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
                loadingUsers: true
            };
        
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loadingUsers: false,
                usersData: action.payload.data,
                pageNumber: action.payload.page + 1,
                total: action.payload.total,
                limit: action.payload.limit,
                totalPages: Math.ceil(action.payload.total / action.payload.limit)
            };

        case userActionTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                loadingUsers: false,
                error: true,
                errorMessage: action.payload
            };

        case userActionTypes.FETCH_USER_START:
            return {
                ...state,
                loadingUser: true,
            };
        
        case userActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loadingUser: false,
                userDetails: action.payload
            };
        
        case userActionTypes.FETCH_USER_FAIL:
            return {
                ...state,
                loadingUser: false,
                error: true,
                errorMessage: action.payload
            };
        
        case userActionTypes.CREATE_USER_START:
            return {
                ...state,
                creatingUser: true,
            };
        
        case userActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                creatingUser: false,
                // userDetails: action.payload,
            };

        case userActionTypes.CREATE_USER_FAILURE:
            return{
                ...state,
                creatingUser: false,
                error: true,
                errorMessage: action.payload
            };
            
        case userActionTypes.START_EDITING:
            return {
                ...state,
                editUserId:action.payload,
            };
        
        case userActionTypes.DONE_EDITING:
            return {
                ...state,
                editUserId: undefined,
                userDetails: {}
            };
        
        default:
            return state;
    }
}

export default usersReducer;