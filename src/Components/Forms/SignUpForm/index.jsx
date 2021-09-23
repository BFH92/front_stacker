import React, { useState } from "react";
import { useForm } from "react-hook-form";
//styles
import "./sign_up_form.scss";
//Components
import UIButton from "../../UIButton";
//MaterialUI
import Card from "@material-ui/core/Card";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@material-ui/core/CardContent";

const SignUpForm = ({ user }) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card variant="outlined">
      <CardContent>
        <form
          className="container--form"
          onSubmit={handleSubmit(user.SignUp)}
          onClick={() => {
            setValue("email", user.email);
            setValue("password", user.password);
          }}
        >
          <div className="container__email--signup">
            <TextField
              sx={{ mb: 4, mt:4 }}
              theme={theme}
              color="primary"
              label="Email"
              variant="outlined"
              {...register("email", {
                required: "Email requis",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Format invalide",
                },
              })}
              size="small"
              defaultValue={user.email}
              onChange={(e) => user.setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="container__password--signup">
            <TextField
              sx={{ mb: 4 }}
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
          </div>
          <div className="container--cta">
            <UIButton
              color="primary"
              size="large"
              variant="contained"
              content="S'inscrire"
              type="submit"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
