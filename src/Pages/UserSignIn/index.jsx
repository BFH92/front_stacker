import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";

const UserSignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const login = async (e) => {
    e.preventDefault();
    const response = await UsersAPIManager.login(email, password);
  };
  return (
    <div>
      <SignInForm user={{email, setEmail, password, setPassword, login}}/>
    </div>
  );
}

export default UserSignIn;
