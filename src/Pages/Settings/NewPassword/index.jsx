import React,{useState} from 'react';
import NewPasswordForm from '../../../Components/Forms/NewPasswordForm';
import SettingsHeader from '../../../Components/SettingsHeader';
import UsersAPIManager from '../../../Services/RailsApi/UsersFetch';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { RegisterUserLoginStatus, RegisterUserLogoutStatus } from '../../../Store';


const NewPassword = ({user}) => {
    const [password, setPassword] = useState("")

    const history = useHistory()
    const dispatch = useDispatch()
    const token =  "reset_password"
    const email= "stacker@yopmail.com"
    const resetPassword = async (e) => {
      e.preventDefault();
      const response = await UsersAPIManager.resetPassword(password,token);
      response = await UsersAPIManager.login(email, password);
      history.push("/")
      response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id,"user")):dispatch(RegisterUserLogoutStatus());
      user.setIsLogged(true)
    };
    return(
    <div>
    <SettingsHeader/>
    <NewPasswordForm user={{password, setPassword, resetPassword}}/>
    </div>
  );
}

export default NewPassword;
