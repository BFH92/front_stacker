import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './getPassword.scss'
import GetPasswordForm from '../../../Components/Forms/GetPasswordForm';
import CompaniesAuthManager from '../../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager';
import UsersAuthManager from '../../../Services/RailsApi/UsersFetch/UsersAuthManager';
//MaterialUI
import Typography from "@mui/material/Typography";

const GetPassword = (user) => {
  const [email, setEmail] = useState("")
  const sendPasswordInstructions = async (e) => {
    //e.preventDefault();
    let response;
    
    switch (user.identity){
    case ("company"):
      response = await CompaniesAuthManager.sendPasswordInstructions(email);
      break;
    case ("user"):
      response = await UsersAuthManager.sendPasswordInstructions(email);
    break;
    default:
    console.log("hey")
    }
  
    console.log(response)
    response.status === 200? console.log('un mail é été envoyé'):console.log('oups');
  }
  return (
    <div className="container__form--bg">
      <div className="container__form--all">
        <Typography className="title--form" variant="h3" color="secondary">
          Réinitialiser mot de passe
        </Typography>
        <GetPasswordForm user={{email, setEmail, sendPasswordInstructions}}/>
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
}

export default GetPassword;
