import React, { useState, useEffect } from "react";
import SignInForm from "../../Components/Forms/SignInForm";
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
import { Link } from "react-router-dom";

const UserSignIn = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    const response = await UsersAPIManager.login(email, password);
    history.push("/");
    response.status === 200
      ? dispatch(RegisterUserLoginStatus(response.data.user_id, "user"))
      : dispatch(RegisterUserLogoutStatus());
    user.setIsLogged(true);
  };

  return (
    <>
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
    <Link to="/user/sign-up">
    <div>
    Pas de compte ? S'inscrire
    </div>
    </Link>
    <Link to="/user/settings/get-password">
    <div>
    Mot de passe oublié
    </div>
    </Link>
    <Link to="/company/sign-in">
    <div>
    Vous êtes une entreprise ? espace entreprise
    </div>
    </Link>
    </>
  );
};

export default UserSignIn;
