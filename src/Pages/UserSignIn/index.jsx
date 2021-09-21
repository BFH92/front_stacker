import React, { useState} from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { useHistory } from "react-router";
import { useDispatch} from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";

const UserSignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    const response = await UsersAuthManager.login(email, password);
    history.push("/");
    response.status === 200
      ? dispatch(RegisterUserLoginStatus(response.data.user_id, "user"))
      : dispatch(RegisterUserLogoutStatus());
    user.setIsLogged(true);
  };

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
