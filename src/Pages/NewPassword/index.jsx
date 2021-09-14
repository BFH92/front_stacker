import React,{useState} from 'react';
import NewPasswordForm from '../../Components/Forms/NewPasswordForm';
import SettingsHeader from '../../Components/SettingsHeader';
import UsersAPIManager from '../../Services/RailsApi/UsersFetch';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from '../../Store';
import {useLocation} from "react-router-dom";

const NewPassword = ({user}) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const search = useLocation().search;
    const reset_token= new URLSearchParams(search).get('reset_token');
    
    console.log(reset_token)
    const history = useHistory()
    const dispatch = useDispatch()
    const resetPassword = async (e) => {
      e.preventDefault();
      let response = await UsersAPIManager.resetPassword(password,email,reset_token);
      response = await UsersAPIManager.login(email, password);
      history.push("/")
      response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());
      user.setIsLogged(true)
    };
    return(
    <div>
    <SettingsHeader/>
    <NewPasswordForm user={{password, setPassword, resetPassword,email, setEmail}}/>
    </div>
  );
}

export default NewPassword;
