import React, { useState } from "react";
//import "./sign_up_form.scss";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";
import { useForm } from "react-hook-form";

const SignUpForm = ({ user }) => {
  const theme = useTheme();
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
      <form onSubmit={handleSubmit(user.SignUp)}>
        <TextField
          theme={theme}
          color="primary"
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Email requis",
            pattern: {value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, message: "Format invalide"}
          })}
          size="small"
          defaultValue={user.email}
          onChange={(e) => user.setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <TextField
          theme={theme}
          color="primary"
          label="Mot de passe"
          variant="outlined"
          {...register("password", {
            required: "Mot de passe requis",
          })}
          size="small"
          type="password"
          defaultValue={user.password}
          onChange={(e) => user.setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <UIButton
          color="primary"
          size="large"
          variant="contained"
          content="S'inscrire"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
