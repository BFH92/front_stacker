import React from "react";
//styles
import './sign_up_form.scss';

const SignUpForm = ({ user }) => {
  return (
    <>
      <div className="form__container--signup">
        <form className="form" /*</div>onSubmit={fetchRegister}*/>
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
          <button type="submit" onClick={user.SignUp}>
            S'inscrire
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
