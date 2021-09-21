import React, { useState } from "react";
//import "./sign_up_form.scss";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";

const SignUpForm = ({ user }) => {
  const theme = useTheme();
  

  return (
    <div className="form__container--signup">
      <form onSubmit={user.SignUp}>
        <TextField
          theme={theme}
          color="primary"
          label="Email"
          variant="outlined"
          required
          helperText="Incorrect entry."
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
          size="small"
          type="password"
          defaultValue={user.password}
          onChange={(e) => user.setPassword(e.target.value)}
        />

        <UIButton
          color="primary"
          size="small"
          variant="contained"
          content="s'inscrire"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
