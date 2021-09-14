import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import CompaniesAPIManager from "../../Services/RailsApi/CompaniesFetch";
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'
import { Link } from "react-router-dom";

const CompanySignIn = ({user}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const login = async (e) => {
    e.preventDefault();
    const response = await CompaniesAPIManager.login(email, password);
    history.push("/")
    console.log("LOGIN COMPANY")
    console.log(response)
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"company")):dispatch(RegisterUserLogoutStatus());
    user.setIsLogged(true);
  };
  return (
    <>
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
    <Link to="/company/sign-up">
    <div>
    Pas de compte ? S'inscrire
    </div>
    </Link>
    <Link to="/company/settings/get-password">
    <div>
    Mot de passe oublié
    </div>
    </Link>
    </>
  );
}

export default CompanySignIn;
