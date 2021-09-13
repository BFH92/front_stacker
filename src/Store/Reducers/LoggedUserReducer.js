import {  REGISTER_USER_LOGIN_STATUS,  REGISTER_USER_LOGOUT_STATUS } from "../Types/LoggedUserTypes";

const initialUserState = {
  isLogged: false,
  id: undefined,
  logged_as: undefined
}

const LoggedUserReducer = (state = initialUserState, action) => {

  switch(action.type){
    case REGISTER_USER_LOGIN_STATUS:
      return {
        ...state,
        isLogged: true,
        id: action.id,
        logged_as: action.logged_as
      }
    case REGISTER_USER_LOGOUT_STATUS:
      return {
        state: undefined,
        id: undefined,
        logged_as: undefined

    }

    default:
        return state;
    }
  
}

export default LoggedUserReducer