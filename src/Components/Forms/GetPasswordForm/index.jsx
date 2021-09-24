import React from "react";
import "./get_password_form.scss";
//formvalidation
import { useForm } from "react-hook-form";
import UIButton from "../../UIButton";
import TextField from "@mui/material/TextField";
import { Card, CardContent, useTheme } from "@mui/material";

const GetPasswordForm = ({ user }) => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
    },
  });

  return (
    <Card>
      <CardContent>
        <form
          className="container--form"
          onSubmit={handleSubmit(user.sendPasswordInstructions)}
        >
          <div className="input__container">
            <TextField
              theme={theme}
              focused
              sx={{ mb: 2.5, mt: 1 }}
              color="primary"
              label="E-mail"
              // helperText="E-mail de Réinitialisation"
              variant="outlined"
              {...register("email", {
                required: "Email requis",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Format invalide",
                },
              })}
              size="large"
              defaultValue={user.email}
              onChange={(e) => user.setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="container--cta">
            <UIButton
              color="primary"
              size="small"
              variant="contained"
              content="envoyer"
              type="submit"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default GetPasswordForm;
