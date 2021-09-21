import React from "react";
//styles 
//import './sign_in_form.scss';
//formvalidation
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";

const SignInForm = ({ user }) => {
  const theme = useTheme();
  return (
    <>
      <div className="form__container--signin">
      <form onSubmit={user.SignUp}>
        <TextField
          theme={theme}
          color="primary"
          label="Email"
          variant="outlined"
          required
          helperText="Renseigner votre email"
          size="small"
          defaultValue={user.email}
          onChange={(e) => user.setEmail(e.target.value)}
        />

        <TextField
          theme={theme}
          color="primary"
          label="Mot de passe"
          variant="outlined"
          required
          helperText="Renseigner votre mot de passe"
          size="small"
          type="password"
          defaultValue={user.password}
          onChange={(e) => user.setPassword(e.target.value)}
        />

        <UIButton
          color="primary"
          size="small"
          variant="contained"
          content="Se connecter"
          type="submit"
        />
      </form>
      </div>
    </>
  );
};

export default SignInForm;
