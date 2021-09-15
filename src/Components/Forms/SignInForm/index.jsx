import React from "react";
//styles 
import './sign_in_form.scss';

const SignInForm = ({ user }) => {
  return (
    <>
      <div className="form__container--signin">
        <form className="form">
          <div className="input__container">
            <label>
              Email
              <input
                type="text"
                value={user.email}
                onChange={(e) => user.setEmail(e.target.value)}
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                value={user.password}
                onChange={(e) => user.setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" onClick={user.login}>
            Se Connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
