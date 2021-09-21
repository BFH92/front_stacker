import React, { useState } from "react";
// import "./sign_up_form.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import UIButton from "../../UIButton";

const SignUpForm = ({ user }) => {
  const theme= useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      password: user.password,
    },
  });

  return (

    <div className="form__container--signup">
      <TextField
        theme={theme}
        color="primary"
        label="Email"
        variant="outlined"
        size="small"
        {...register("email", {
          required: true,
          pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        })}
        onChange={(e) => user.setEmail(e.target.value)}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={() => <p><strong>Email valide requis</strong></p>}
      />
      <TextField
        theme={theme}
        color="primary"
        label="Mot de passe"
        variant="outlined"
        size="small"
        type="password"
        {...register("password", { required: true, minLength: 5 })}
        onChange={(e) => user.setPassword(e.target.value)}        
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={() => <p><strong>Mot de passe trop court</strong></p>}
      />
      <UIButton
        color="primary"
        size="small"
        variant="contained"
        content="s'inscrire"
        type="submit"
        onClick={handleSubmit(user.SignUp)}
      />
    </div>
  );
};

export default SignUpForm;
