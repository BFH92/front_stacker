import React, {useEffect, useState} from 'react'
//import './new_password_form.scss';
import { useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import UIButton from "../../UIButton";
import { useForm } from "react-hook-form";

const NewPasswordForm = ({user}) => {
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
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const comparePassword = (e) => {
    if (user.password === confirmedPassword && confirmedPassword){
      return true
    }else{
      return false
    }
  }
  useEffect(() => {
  comparePassword()
  },);
  return (
      <>
      <div className="form__container--newpassword">
        <form onSubmit={handleSubmit(user.resetPassword)}>
          <div className="input__container">
          <TextField
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
        <TextField
          theme={theme}
          color="primary"
          label="confirmation"
          variant="outlined"
          size="small"
          type="password"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password.message}</p>}
          {comparePassword()?
          <UIButton
          color="primary"
          size="large"
          variant="contained"
          content="Changer Mot de passe"
          type="submit"
        />
          :
          <h2>
            Inscrivez votre nouveau mot de passe
          </h2>}
          </div>
        </form>
      </div>
    </>
  
  );
}

export default NewPasswordForm;
