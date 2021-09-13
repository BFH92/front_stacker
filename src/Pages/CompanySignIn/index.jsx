import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import CompaniesAPIManager from "../../Services/RailsApi/CompaniesFetch";

const CompanySignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const login = async (e) => {
    e.preventDefault();
    const response = await CompaniesAPIManager.login(email, password);
  };
  return (
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
  );
}

export default CompanySignIn;
