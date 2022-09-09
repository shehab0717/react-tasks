import uiActionTypes from "./ui.types";

const initState = {
    createUser: false,
    updateUser: false,
    userDetails: undefined,
}

export default function uiReducer(state = initState, action) {
    switch (action.type) {
        case uiActionTypes.SHOW_USER_FORM:
            return {
                ...state,
                createUser: true,
            }
        case uiActionTypes.HIDE_USER_FORM:
            return {
                ...state,
                createUser: false,
            }
        default:
            return state;
    }
}