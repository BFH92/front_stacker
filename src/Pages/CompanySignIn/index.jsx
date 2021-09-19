import React, { useState } from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import { useDispatch } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

  const CompanySignIn = ({user}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();


  const login = async (e) => {
    e.preventDefault();
    const response = await CompaniesAuthManager.login(email, password);
    history.push("/")
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.company_id,"company")):dispatch(RegisterUserLogoutStatus());
    user.setIsLogged(true);

  };
  return (
    <>
      <div>
        <h1>Espace entreprise</h1>
        <SignInForm user={{ email, setEmail, password, setPassword, login }} />
      </div>
      <Link to="/company/sign-up">
        <h3>Pas de compte ? S'inscrire</h3>
      </Link>
      <Link to="/company/settings/get-password">
        <h3>Mot de passe oublié</h3>
      </Link>
      <Link to="/user/sign-in">
        <h3>Se connecter en tant qu'utilisateur</h3>
      </Link>
    </>
  );
};

export default CompanySignIn;
