import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./getPassword.scss";
import GetPasswordForm from "../../../Components/Forms/GetPasswordForm";
import CompaniesAuthManager from "../../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import UsersAuthManager from "../../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router";

//MaterialUI
import Typography from "@mui/material/Typography";

const GetPassword = (user) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
        <Typography className="title--form" variant="h3" color="secondary">
          Réinitialiser mot de passe
        </Typography>
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
