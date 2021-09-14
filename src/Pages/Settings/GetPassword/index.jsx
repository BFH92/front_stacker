import React,{useState} from 'react';
import GetPasswordForm from '../../../Components/Forms/GetPasswordForm';
import UsersAPIManager from '../../../Services/RailsApi/UsersFetch';

const GetPassword = () => {
  const [email, setEmail] = useState("")
  const sendPasswordInstructions = async (e) => {
    e.preventDefault();
    let response = await UsersAPIManager.sendPasswordInstructions(email);
    response.status === 200? console.log('un mail é été envoyé'):console.log('oups')
  };
  return (
  <GetPasswordForm user={{email, setEmail, sendPasswordInstructions}}/>
  );
}

export default GetPassword;
