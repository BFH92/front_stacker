import React from 'react';
import SettingsHeader from '../../SettingsHeader';

const GetPasswordForm = ({user}) => {
  return (
      <>
      <SettingsHeader/>
      <div>
        <form>
        <label>
          email
            <input
              type="text"
              value={user.email}
              onChange={(e) => user.setEmail(e.target.value)}
            />
          </label>
          <button onClick={user.sendPasswordInstructions}>
            Changer de mot de passe
          </button>
        </form>
      </div>
    </>
  );
}

export default GetPasswordForm;
