import React from "react";
//styles
import "./sign_in_form.scss";
//formvalidation
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../CustomUIButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CustomTextField from "../../CustomTextField";

const SignInForm = ({ user }) => {
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

  return (
    <Card variant="outlined">
      <CardContent>
        <form
          className="container--form"
          onSubmit={handleSubmit(user.login)}
          onClick={() => {
            setValue("email", user.email);
            setValue("password", user.password);
          }}
        >
          <div className="container__email--login">
            <TextField
              sx={{ mb: 2.5 }}
              color="primary"
              variant="outlined"
              label="Email"
              defaultValue={user.email}
              onChange={(e) => user.setEmail(e.target.value)}
              validate={
                {...register("email", {
                  required: "Email requis",
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Format invalide",
                  },
                })}
              }
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="container__password--login">
            <TextField
              sx={{ mb: 2.5 }}
              theme={theme}
              color="primary"
              label="Mot de passe"
              variant="outlined"
              {...register("password", {
                required: "Mot de passe requis",
              })}
              type="password"
              defaultValue={user.password}
              onChange={(e) => user.setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="container--cta">
            <UIButton
              color="primary"
              size="small"
              variant="contained"
              content="Se connecter"
              type="submit"
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
