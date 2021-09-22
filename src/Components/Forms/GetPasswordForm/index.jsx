import React from "react";
//import "./get_password_form.scss";
//formvalidation
import { useForm } from "react-hook-form";
import UIButton from "../../UIButton";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";

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
    <>
      <div className="form__container--getpassword">
        <form onClick={handleSubmit(user.sendPasswordInstructions)}>
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
          </div>
          <UIButton
            color="primary"
            size="large"
            variant="contained"
            content="Changer Mot de passe"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default GetPasswordForm;
