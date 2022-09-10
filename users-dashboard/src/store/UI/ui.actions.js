
import actionTypes from './ui.types'
export function showCreateUserForm() {
    return {
        type: actionTypes.SHOW_CREATE_USER_FORM,
    }
}
export function showUpdateUserForm() {
    return {
        type: actionTypes.SHOW_UPDATE_USER_FORM,
    }
}
export function hideUserForm() {
    return {
        type: actionTypes.HIDE_USER_FORM,
    }
}


