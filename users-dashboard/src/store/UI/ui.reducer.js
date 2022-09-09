import uiActionTypes from "./ui.types";

const initState = {
    createUser: false,
    updateUser: false,
    userDetails: undefined,
}

export default function uiReducer(state = initState, action) {
    switch (action.type) {
        case uiActionTypes.SHOW_CREATE_USER_FORM:
            return {
                ...state,
                createUser: true,
            }
        case uiActionTypes.HIDE_CREATE_USER_FORM:
            return {
                ...state,
                createUser: false,
            }
        case uiActionTypes.SHOW_UPDATE_USER_FORM:
            return {
                ...state,
                updateUser: true,
                userDetails: action.payload
            }
        case uiActionTypes.HIDE_UPDATE_USER_FORM:
            return {
                ...state,
                updateUser: false,
            }
        default:
            return state;
    }
}