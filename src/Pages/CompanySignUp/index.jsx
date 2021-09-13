import React,{useState} from 'react';
import SignUpForm from '../../Components/Forms/SignUpForm';
import CompaniesAPIManager from '../../Services/RailsApi/UsersFetch';

const CompanySignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const SignUp = async (e) => {
    e.preventDefault();
    const response = await CompaniesAPIManager.register(email, password);
  //console.log(response.data.user_id)
  //response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id)):dispatch(RegisterUserLogoutStatus());
  //history.push("/")
    return response
 };
  return (
    <div>
      <SignUpForm user={{email, setEmail, password, setPassword, SignUp}}/>
    </div>
  );
}

export default CompanySignUp;
