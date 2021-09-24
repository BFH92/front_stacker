import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
//Redux
import { useDispatch } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
//Styles
import "./newPassword.scss";
//Services
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
//Components
import NewPasswordForm from "../../Components/Forms/NewPasswordForm";
//MaterialUI
import { Typography } from "@mui/material";
import { useSnackbar } from "notistack";

const NewPassword = ({ user }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const search = useLocation().search;
  const reset_token = new URLSearchParams(search).get("reset_token");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const resetPassword = async (e) => {
    let response;
    let variant = "success";
    let message = `Mot de passe réinitialisé !`;
    switch (user.identity) {
      case "company":
        response = await CompaniesAuthManager.resetPassword(
          password,
          email,
          reset_token
        );
        response = await CompaniesAuthManager.login(email, password);
        enqueueSnackbar(message, { variant });
        response.status === 200
          ? dispatch(RegisterUserLoginStatus(response.data.user_id, "company"))
          : dispatch(RegisterUserLogoutStatus());
        break;
      case "user":
        response = await UsersAuthManager.resetPassword(
          password,
          email,
          reset_token
        );
        response = await UsersAuthManager.login(email, password);
        enqueueSnackbar(message, { variant });
        response.status === 200
          ? dispatch(RegisterUserLoginStatus(response.data.user_id, "user"))
          : dispatch(RegisterUserLogoutStatus());
        break;
      default:
    }

    history.push("/");

    user.setIsLogged(true);
  };
  return (
    <div className="reset-container__form--bg">
      <div className="container__form--all">
        <Typography className="title--form" variant="h3" color="secondary">
          Réinitialiser mot de passe
        </Typography>
        <NewPasswordForm
          user={{ password, setPassword, resetPassword, email, setEmail }}
        />
      </div>
      <div className="container__links--all"></div>
    </div>
  );
};

export default NewPassword;
