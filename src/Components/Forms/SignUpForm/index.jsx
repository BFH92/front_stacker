import React from "react";

const SignUpForm = ({ user }) => {

  return (
    <>
      <div >
        <div>
          <div>
            <form /*</div>onSubmit={fetchRegister}*/>
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
              <button type="submit" onClick={user.SignUp}>
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
