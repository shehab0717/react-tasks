import uiActionTypes from "./ui.types";

const initState = {
    showUserForm: false,
    editMode: false
}

export default function uiReducer(state = initState, action) {
    switch (action.type) {
        case uiActionTypes.SHOW_CREATE_USER_FORM:
            return {
                ...state,
                showUserForm: true,
                editMode: false,
            };
        case uiActionTypes.SHOW_UPDATE_USER_FORM:
            return {
                ...state,
                showUserForm: true,
                editMode: true,
            };
        case uiActionTypes.HIDE_USER_FORM:
            return {
                ...state,
                showUserForm: false,
            }
        default:
            return state;
    }
}