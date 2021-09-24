import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Redux
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from "../../Store";
//styles
import "./userSignUp.scss";
//Components
import SignUpForm from "../../Components/Forms/SignUpForm";
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { useSnackbar } from "notistack";
//MaterialUI
import CustomTypography from "../../Components/CustomTypography";

const UserSignUp = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar} = useSnackbar();

  const SignUp = async (e) => {
    //e.preventDefault();
    try {
      const response = await UsersAuthManager.register(email, password);
      let variant = "success";
      let message = `Bienvenue sur Stacker ${email} !`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLoginStatus(response.data.user_id, "user"));
      user.setIsLogged(true);
      history.push("/search");
    } catch (error) {
      let variant = "error";
      let message = `Oups, il y a un couac! -> ${error}`;
      enqueueSnackbar(message, { variant });
      dispatch(RegisterUserLogoutStatus());
      history.push("/user/sign-up");
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
          content="Inscription"
        />
        <SignUpForm user={{ email, setEmail, password, setPassword, SignUp }} />
        <div className="container__links--all">
          <Link to="/user/sign-in">Déjà un compte? Se Connecter</Link>
          <Link to="/user/settings/get-password">Mot de passe oublié</Link>
          <Link to="/company/sign-in">
            Vous êtes une entreprise ? Espace entreprise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
