import React,{useState} from 'react';
import SignUpForm from '../../Components/Forms/SignUpForm';
import UsersAPIManager from '../../Services/RailsApi/UsersFetch';
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const SignUp = async (e) => {
    e.preventDefault();
    const response = await UsersAPIManager.register(email, password);
    history.push("/")
    console.log(response.data.user_id)
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());
    return response
 };
  return (
    <>
    <div>
      <SignUpForm user={{email, setEmail, password, setPassword, SignUp}}/>
    </div>
    <Link to="/users/sign-in">
    <div>
    Déjà un compte ? Se connecter
    </div>
    </Link>
    </>

  );
}

export default UserSignUp;
