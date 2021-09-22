import React, { useState } from "react";
import SignUpForm from "../../Components/Forms/SignUpForm";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { useSnackbar } from 'notistack';


const CompanySignUp = ({user}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const SignUp = async (e) => {
      try {
      const response = await CompaniesAuthManager.register(email, password);
      let variant = 'success'
      let message = `Bienvenue sur Stacker, il nous faut encore quelques informations de votre part avant d'être référencé !`
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.company_id, "company"))
      user.setIsLogged(true)
      history.push("/company/dashboard");
      
    } catch (error) {
      let variant = 'error'
      let message = `Nous rencontrons une erreur pendant votre inscription, veuillez réessayer -> ${error}`
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLogoutStatus());
      history.push("/company/sign-up");
      }
    }
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
