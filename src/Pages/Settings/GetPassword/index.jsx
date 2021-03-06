import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
// Styles
import "./getPassword.scss";
// Components
import GetPasswordForm from "../../../Components/Forms/GetPasswordForm";
// API Managers
import CompaniesAuthManager from "../../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import UsersAuthManager from "../../../Services/RailsApi/UsersFetch/UsersAuthManager";
//Alerts
import { useSnackbar } from "notistack";
//MaterialUI
import CustomTypography from "../../../Components/CustomTypography";

const GetPassword = (user) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar} = useSnackbar();
  const history = useHistory();

  const sendPasswordInstructions = async () => {
    let variant = "success";
    let message = `Mail envoyé sur ${email} !`;

    switch (user.identity) {
      case "company":
        await CompaniesAuthManager.sendPasswordInstructions(email);
        enqueueSnackbar(message, { variant });
        history.push("/company/sign-in");
        break;
      case "user":
        await UsersAuthManager.sendPasswordInstructions(email);
        enqueueSnackbar(message, { variant });
        history.push("/user/sign-in");
        break;
      default:
    }
  };
  return (
    <div className="container__form--bg">
      <div className="container__form--all">
        <CustomTypography
          className={"title--form"}
          color="primary"
          variant="h3"
          component="h1"
          content="Mot de passe oublié"
        />
        <GetPasswordForm user={{ email, setEmail, sendPasswordInstructions }} />
        <div className="container__links--all">
          <Link to="/user/sign-up">Pas de compte ? S'inscrire</Link>
          <Link to="/user/settings/get-password">Mot de passe oublié</Link>
          <Link to="/company/sign-in">
            Vous êtes une entreprise ? Espace entreprise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetPassword;
