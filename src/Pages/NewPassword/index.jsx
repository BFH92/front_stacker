import React,{useState} from 'react';
import NewPasswordForm from '../../Components/Forms/NewPasswordForm';
import UsersAPIManager from '../../Services/RailsApi/UsersFetch';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from '../../Store';
import {useLocation} from "react-router-dom";
import CompaniesAPIManager from '../../Services/RailsApi/CompaniesFetch';

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
      //e.preventDefault();
      let response;
      switch (user.identity){
        case ("company"):
          console.log("fetch company")
          response = await CompaniesAPIManager.resetPassword(password,email,reset_token);
          response = await CompaniesAPIManager.login(email, password);
          response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"company")):dispatch(RegisterUserLogoutStatus());
          break;
        case ("user"):
          console.log("user")
          response = await UsersAPIManager.resetPassword(password,email,reset_token);
          response = await UsersAPIManager.login(email, password);
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
