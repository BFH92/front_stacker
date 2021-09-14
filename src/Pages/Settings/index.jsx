import React from 'react';
//styles
import './settings.scss';
//components
import Header from '../../Components/Header';
import { UserForm } from '../../Components/Forms/UserForm';
import { CompanyForm } from '../../Components/Forms/CompanyForm';
import {Link} from 'react-router-dom';
import SettingsHeader from '../../Components/SettingsHeader';


const Settings = () => {

  return (
    <div className="">
      <SettingsHeader/>
      <CompanyForm />
      <UserForm/>
      
      <Link to="./settings/get-password">reset password</Link>
    </div>
  );
};

export default Settings;
