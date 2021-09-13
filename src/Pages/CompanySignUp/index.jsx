import React,{useState} from 'react';
import SignUpForm from '../../Components/Forms/SignUpForm';
import CompaniesAPIManager from '../../Services/RailsApi/UsersFetch';
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import {RegisterUserLoginStatus, RegisterUserLogoutStatus} from '../../Store'

const CompanySignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const SignUp = async (e) => {
      e.preventDefault();
      const response = await CompaniesAPIManager.register(email, password);
      response.status === 200? history.push("/"): window.alert("couac!");
      response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"company")):dispatch(RegisterUserLogoutStatus());

    }

  return (
    <div>
      <SignUpForm user={{email, setEmail, password, setPassword, SignUp}}/>
    </div>
  );
}

export default CompanySignUp;
