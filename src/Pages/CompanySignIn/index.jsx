import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import CompaniesAPIManager from "../../Services/RailsApi/CompaniesFetch";
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'

const CompanySignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const login = async (e) => {
    e.preventDefault();
    const response = await CompaniesAPIManager.login(email, password);
    history.push("/")
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"company")):dispatch(RegisterUserLogoutStatus());

  };
  return (
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
  );
}

export default CompanySignIn;
