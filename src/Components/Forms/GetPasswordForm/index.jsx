import React from 'react';
import SettingsHeader from '../../SettingsHeader';
import './get_password_form.scss';
const GetPasswordForm = ({user}) => {
  return (
      <>
      <SettingsHeader/>
      <div className="form__container--getpassword">
        <form className="form">
          <div className="input__container">
        <label>
          email
            <input
              type="text"
              value={user.email}
              onChange={(e) => user.setEmail(e.target.value)}
            />
          </label>
          </div>
          <button onClick={user.sendPasswordInstructions}>
            Changer de mot de passe
          </button>
        </form>
      </div>
    </>
  );
}

export default GetPasswordForm;
