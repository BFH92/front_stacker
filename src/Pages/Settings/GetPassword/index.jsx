import React,{useState} from 'react';
import GetPasswordForm from '../../../Components/Forms/GetPasswordForm';
import UsersAPIManager from '../../../Services/RailsApi/UsersFetch';
import CompaniesAPIManager from '../../../Services/RailsApi/CompaniesFetch';

const GetPassword = (user) => {
  const [email, setEmail] = useState("")
  console.log(user.identity)
  const sendPasswordInstructions = async (e) => {
    e.preventDefault();
    let response;

    switch (user.identity){
    case ("company"):
      response = await CompaniesAPIManager.sendPasswordInstructions(email);
      break;
    case ("user"):
      response = await UsersAPIManager.sendPasswordInstructions(email);
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
