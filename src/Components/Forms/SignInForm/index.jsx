import React from "react";
//styles 
import './sign_in_form.scss';
//formvalidation
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const SignInForm = ({ user }) => {
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
    <>
      <div className="form__container--signin">
        <form className="form">
          <div className="input__container">
            <label>
              Email
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                })}
                onChange={(e) => user.setEmail(e.target.value)}
              />
            </label>
            <ErrorMessage
              errors={errors}
              name="email"
              render={() => <p><strong>Email valide requis</strong></p>}
            />
            <label>
              Mot de passe
              <input
                type="password"
                {...register("password", { required: true })}
                onChange={(e) => user.setPassword(e.target.value)}
              />
            </label>
            <ErrorMessage
              errors={errors}
              name="password"
              render={() => <p><strong>Mot de passe requis</strong></p>}
            />
          </div>
          <button type="submit" onClick={()=>handleSubmit(user.login)}>
            Se Connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
