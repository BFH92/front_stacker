import React, { useState, useEffect } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";
import { useHistory } from 'react-router';
import { useDispatch, useSelector} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'

  

const UserSignIn = () => {
//TODO: import un useContext pour la variabel isLogged
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const login = async (e) => {
    e.preventDefault();
    const response = await UsersAPIManager.login(email, password);
    history.push("/")
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());
    response.status === 200? setIsLogged(true):setIsLogged(false);

  };
  useEffect(() => {
    console.log("changer le button")
    return() => {
    }
  }, [isLogged]);
  return (
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
  );
}

export default UserSignIn;
