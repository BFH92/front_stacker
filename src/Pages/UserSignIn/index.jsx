import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'

  

const UserSignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const login = async (e) => {
    e.preventDefault();
    const response = await UsersAPIManager.login(email, password);
    history.push("/")
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());

  };
  return (
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
  );
}

export default UserSignIn;
