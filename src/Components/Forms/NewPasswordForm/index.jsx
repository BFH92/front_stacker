import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//Styles
import "./new_password_form.scss";
//Components
import UIButton from "../../UIButton";
//MaterialUI
import TextField from "@mui/material/TextField";
import { Typography, useTheme } from "@mui/material";
import { Card, CardContent } from "@material-ui/core";

const NewPasswordForm = ({ user }) => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      password: user.password,
    },
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const comparePassword = (e) => {
    if (user.password === confirmedPassword && confirmedPassword) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    comparePassword();
  });
  return (
    <Card>
      <CardContent>
        <form
          onSubmit={handleSubmit(user.resetPassword)}
          onClick={() => {
            setValue("email", user.email);
            setValue("password", user.password);
          }}
        >
          <div className="container--form">
            <TextField
              theme={theme}
              sx={{ mt: 4 }}
              color="primary"
              label="E-mail"
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
            <TextField
              theme={theme}
              sx={{ mt: 4 }}
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
            <TextField
              theme={theme}
              sx={{ mt: 4 }}
              color="primary"
              label="Confirmer mot de passe"
              variant="outlined"
              size="small"
              type="password"
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password.message}</p>}
            {comparePassword() ? (
              <div className="container--cta">
                <UIButton
                  color="primary"
                  size="large"
                  variant="contained"
                  content="Changer Mot de passe"
                  type="submit"
                />
              </div>
            ) : (
              <Typography variant="h5" color="secondary" mt={5}>
                Inscrivez votre nouveau mot de passe
              </Typography>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewPasswordForm;
