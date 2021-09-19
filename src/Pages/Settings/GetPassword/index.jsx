import React,{useState} from 'react';
import GetPasswordForm from '../../../Components/Forms/GetPasswordForm';
import CompaniesAuthManager from '../../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager';
import UsersAuthManager from '../../../Services/RailsApi/UsersFetch/UsersAuthManager';

const GetPassword = (user) => {
  const [email, setEmail] = useState("")
  console.log(user.identity)
  const sendPasswordInstructions = async (e) => {
    e.preventDefault();
    let response;
    
    switch (user.identity){
    case ("company"):
      response = await CompaniesAuthManager.sendPasswordInstructions(email);
      break;
    case ("user"):
      response = await UsersAuthManager.sendPasswordInstructions(email);
    break;
    default:
    console.log("hey")
    }
  
    console.log(response)
    response.status === 200? console.log('un mail é été envoyé'):console.log('oups');
  }
  return (
  <GetPasswordForm user={{email, setEmail, sendPasswordInstructions}}/>
  );
}

export default GetPassword;
