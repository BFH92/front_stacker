import React, {useEffect, useState} from 'react'


const NewPasswordForm = ({user}) => {
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const comparePassword = (e) => {
    if (user.password === confirmedPassword){
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
        </form>
      </div>
    </>
  
  );
}

export default NewPasswordForm;
