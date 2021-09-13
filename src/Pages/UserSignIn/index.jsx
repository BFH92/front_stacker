import React, { useState } from "react";
import SignInForm from '../../Components/Forms/SignInForm';

const UserSignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div>
      <SignInForm/>
    </div>
  );
}

export default userSIgn;
