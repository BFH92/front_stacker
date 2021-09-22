import React, { useState } from "react";
import SignUpForm from "../../Components/Forms/SignUpForm";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";


const CompanySignUp = ({user}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const SignUp = async (e) => {
      //e.preventDefault();
      const response = await CompaniesAuthManager.register(email, password);
      response.status === 200? history.push("/"): window.alert("couac!");
      response.status === 200? dispatch(RegisterUserLoginStatus(response.data.company_id,"company")):dispatch(RegisterUserLogoutStatus());
      user.setIsLogged(true)
    };

  return (
    <>
      <div>
        <h1>Créer espace entreprise</h1>
        <SignUpForm user={{ email, setEmail, password, setPassword, SignUp }} />
      </div>
      <Link to="/company/sign-in">
        <h3>Déjà un compte ? Se Connecter</h3>
      </Link>
      <Link to="/company/settings/get-password">
        <h3>Mot de passe oublié</h3>
      </Link>
      <Link to="/user/sign-in">
        <h3>Créer un espace utilisateur</h3>
      </Link>
    </>
  );
};

export default CompanySignUp;
