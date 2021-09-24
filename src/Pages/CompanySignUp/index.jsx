import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Styles
import "./companySignUp.scss";
//Services
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
//Components
import SignUpForm from "../../Components/Forms/SignUpForm";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
//MaterialUI&notistack
import { useSnackbar } from "notistack";
import CustomTypography from "../../Components/CustomTypography";

const CompanySignUp = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const SignUp = async (e) => {
    try {
      const response = await CompaniesAuthManager.register(email, password);
      let variant = "success";
      let message = `Bienvenue sur Stacker, il nous faut encore quelques informations de votre part avant d'être référencé !`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.company_id, "company"));
      user.setIsLogged(true);
      history.push("/company/dashboard");
    } catch (error) {
      let variant = "error";
      let message = `Nous rencontrons une erreur pendant votre inscription, veuillez réessayer -> ${error}`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLogoutStatus());
      history.push("/company/sign-up");
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
          content="Inscription Entreprise"
          align="center"
        />
        <SignUpForm user={{ email, setEmail, password, setPassword, SignUp }} />
        <div className="container__links--all">
          <Link to="/company/sign-in">Déjà un compte ? Se Connecter</Link>
          <Link to="/user/settings/get-password">Mot de passe oublié</Link>
          <Link to="/user/sign-in">Se connecter en tant que développeur</Link>
        </div>
      </div>
    </div>
  );
};

export default CompanySignUp;
