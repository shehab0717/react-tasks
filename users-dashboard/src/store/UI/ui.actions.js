
import actionTypes from './ui.types'
export function showCreateUserForm(){
    return{
        type: actionTypes.SHOW_CREATE_USER_FORM,
    }
}
export function hideCreateUserForm(){
    return{
        type: actionTypes.HIDE_CREATE_USER_FORM,
    }
}
export function showUpdateUserForm(user){
    return{
        type: actionTypes.SHOW_UPDATE_USER_FORM,
        payload: user
    }
}
export function hideUpdateUserForm(){
    return{
        type: actionTypes.HIDE_UPDATE_USER_FORM,
    }
}