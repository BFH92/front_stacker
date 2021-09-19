import React,{useState} from 'react';
import NewPasswordForm from '../../Components/Forms/NewPasswordForm';
import UsersAuthManager from '../../Services/RailsApi/UsersFetch/UsersAuthManager';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from '../../Store';
import {useLocation} from "react-router-dom";
import CompaniesAuthManager from '../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager';

const NewPassword = ({user}) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const search = useLocation().search;
    const reset_token= new URLSearchParams(search).get('reset_token');
    console.log(user.identity)
    console.log(reset_token)
    const history = useHistory()
    const dispatch = useDispatch()
    const resetPassword = async (e) => {
      e.preventDefault();
      let response;
      switch (user.identity){
        case ("company"):
          console.log("fetch company")
          response = await CompaniesAuthManager.resetPassword(password,email,reset_token);
          response = await CompaniesAuthManager.login(email, password);
          response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"company")):dispatch(RegisterUserLogoutStatus());
          break;
        case ("user"):
          console.log("user")
          response = await UsersAuthManager.resetPassword(password,email,reset_token);
          response = await UsersAuthManager.login(email, password);
          response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());
        break;
        default:
        console.log("hey")
        }
    
      history.push("/")
    
      user.setIsLogged(true)
    };
    return(
    <div>
      <NewPasswordForm user={{password, setPassword, resetPassword,email, setEmail}}/>
    </div>
  );
}

export default NewPassword;
