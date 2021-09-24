import React, { useState } from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';
import './userSignIn.scss';
import CustomTypography from "../../Components/CustomTypography";

const UserSignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar} = useSnackbar();

  const login = async () => {
    try {
      const response = await UsersAuthManager.login(email, password);
      let variant = "success";
      let message = `Bienvenue sur Stacker ${email} !`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.user_id, "user"));
      user.setIsLogged(true);
      history.push("/search");
    } catch (error) {
      let variant = "error";
      let message = `Oups, il y a un couac! -> ${error}`;

      if (String(error).includes("401"))
        message = `Diantre ! Ton email ou ton mot de passe n'est pas le bon !`;

      enqueueSnackbar(message, { variant });

      dispatch(RegisterUserLogoutStatus());
      history.push("/user/sign-in");
    }
  };

  return (
    <div className="container__form--bg">
      <div className="container__form--all">

        <CustomTypography
          align="center"
          className={"title--form"}
          color="primary"
          variant="h3"
          component="h1"
          content="Connexion"
        />
        <SignInForm user={{ email, setEmail, password, setPassword, login }} />
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

export default UserSignIn;
