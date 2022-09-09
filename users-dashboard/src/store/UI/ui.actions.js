
import actionTypes from './ui.types'
export function showUserForm(userId){
    return{
        type: actionTypes.SHOW_USER_FORM,
        payload: userId
    }
}
export function hideUserForm(){
    return{
        type: actionTypes.HIDE_USER_FORM,
    }
}
