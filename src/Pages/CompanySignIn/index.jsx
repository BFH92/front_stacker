import React, { useState } from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import { useDispatch } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSnackbar } from 'notistack';

  const CompanySignIn = ({user}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const login = async () => {
    try {
      const response = await CompaniesAuthManager.login(email, password);
      let variant = 'success'
      let message = `Bienvenue sur Stacker !`
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.company_id, "company"))
      user.setIsLogged(true)
      history.push("/company/dashboard");
      
    } catch (error) {
      let variant = 'error'
      let message = `Nous rencontrons une erreur lors de votre connection -> ${error}`
      if (String(error).includes("401"))(message = `La combinaison Email/mot de passe est incorrecte, réessayez`)
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLogoutStatus());
      history.push("/company/sign-in");
      }
    }
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
        <h3>Se connecter en tant que développeur</h3>
      </Link>
    </>
  );
};

export default CompanySignIn;
