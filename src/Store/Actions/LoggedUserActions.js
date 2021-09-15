import { REGISTER_USER_LOGIN_STATUS, REGISTER_USER_LOGOUT_STATUS} from'../Types/LoggedUserTypes'

export const RegisterUserLoginStatus = (id, logged_as) => {
  return{
    type:  REGISTER_USER_LOGIN_STATUS,
    id,
    logged_as
  }
}

export const RegisterUserLogoutStatus = () => {
  return{
    type:  REGISTER_USER_LOGOUT_STATUS,
  }
}