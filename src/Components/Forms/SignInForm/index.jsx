import React, {useState} from "react";

const SignInForm = () => {
  

  return (
    <div>
      <div className="main-content__container">
        <h2 className="title__call-to-action">Ravi de vous revoir !</h2>
        <div className="form__container">
          <form>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" onClick={login}>
              Se Connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
