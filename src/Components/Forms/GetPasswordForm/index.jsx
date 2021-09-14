import React from 'react';

const GetPasswordForm = ({user}) => {
  return (
      <>
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
