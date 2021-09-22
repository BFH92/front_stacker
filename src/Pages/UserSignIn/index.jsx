import React, { useState} from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { useHistory } from "react-router";
import { useDispatch} from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';

const UserSignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const login = async () => {
    
    try {
      const response = await UsersAuthManager.login(email, password);
      let variant = 'success'
      let message = `Bienvenue sur Stacker ${email} !`
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.user_id, "user"))
      user.setIsLogged(true)
      history.push("/search");
      
    } catch (error) {
      let variant = 'error'
      let message = `Oups, il y a un couac! -> ${error}`
    
      if (String(error).includes("401"))(message = `Diantre ! Ton email ou ton mot de passe n'est pas le bon !`)
    
      enqueueSnackbar(message, { variant });
      
      dispatch(RegisterUserLogoutStatus());
      history.push("/user/sign-in");
      }
  }

  return (
    <>
      <div>
      <h1>Espace utilisateur</h1>
        <SignInForm user={{ email, setEmail, password, setPassword, login }} />
      </div>
      <Link to="/user/sign-up">
        <h3>Pas de compte ? S'inscrire</h3>
      </Link>
      <Link to="/user/settings/get-password">
        <h3>Mot de passe oublié</h3>
      </Link>
      <Link to="/company/sign-in">
        <h3>Vous êtes une entreprise ? espace entreprise</h3>
      </Link>
    </>
  );
};

export default UserSignIn;
