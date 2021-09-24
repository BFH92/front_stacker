import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
//Service
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
//Components
import SignInForm from "../../Components/Forms/SignInForm";
//MaterialUI
import { useSnackbar } from "notistack";
import CustomTypography from "../../Components/CustomTypography";

const CompanySignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const login = async () => {
    try {
      const response = await CompaniesAuthManager.login(email, password);
      let variant = "success";
      let message = `Bienvenue sur Stacker !`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.company_id, "company"));
      user.setIsLogged(true);
      history.push("/company/dashboard");
    } catch (error) {
      let variant = "error";
      let message = `Nous rencontrons une erreur lors de votre connection -> ${error}`;
      if (String(error).includes("401"))
        message = `La combinaison Email/mot de passe est incorrecte, réessayez`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLogoutStatus());
      history.push("/company/sign-in");
    }
  };

  return (
    <div className="company-container__form--bg">
      <div className="container__form--all">
      <CustomTypography
          className={"title--form"}
          color="white"
          variant="h3"
          component="h1"
          content="Connexion Entreprise"
          align="center"
        />
        <SignInForm user={{ email, setEmail, password, setPassword, login }} />
        <div className="container__links--all">
          <Link to="/company/sign-up">Pas de compte ? S'inscrire</Link>
          <Link to="/user/settings/get-password">Mot de passe oublié</Link>
          <Link to="/user/sign-in">
          Se connecter en tant que développeur
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanySignIn;
