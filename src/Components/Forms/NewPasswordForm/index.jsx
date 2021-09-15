import React, {useEffect, useState} from 'react'
import './new_password_form.scss';

const NewPasswordForm = ({user}) => {
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const comparePassword = (e) => {
    if (user.password === confirmedPassword && confirmedPassword){
      return true
    }else{
      return false
    }
  }
  useEffect(() => {
  comparePassword()
  },);
  return (
      <>
      <div className="form__container--newpassword">
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
          <label>
          Mot de passe
            <input
              type="text"
              value={user.password}
              onChange={(e) => user.setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirmation de mot de passe
            <input
              type="password"
              //value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </label>
          {comparePassword()?
          <button onClick={user.resetPassword}>
            Changer de mot de passe
          </button>
          :
          <p>
            Inscrivez votre nouveau mot de passe
          </p>}
          </div>
        </form>
      </div>
    </>
  
  );
}

export default NewPasswordForm;
