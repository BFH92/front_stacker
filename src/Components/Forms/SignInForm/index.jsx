import React from "react";

const SignInForm = ({ user }) => {
  return (
    <>
      <div>
        <form>
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
          <button type="submit" onClick={user.login}>
            Se Connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
