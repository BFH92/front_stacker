import React, {useEffect, useState} from 'react'


const NewPasswordForm = ({user}) => {
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const comparePassword = (e) => {
    if (user.password == confirmedPassword){
      console.log("great")
      return true
    }else{
      return false
      console.log("oups")
    }
  }
  useEffect(() => {
  comparePassword()

  }, [confirmedPassword]);
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
            Confirmaton de mot de passe
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
          <a onClick={()=>{console.log("mdp différents")}}>
            Changer de mot de passe
          </a>}
        </form>
      </div>
    </>
  
  );
}

export default NewPasswordForm;
