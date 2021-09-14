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
      <Header />
      <div className="container__title-pane">Settings</div>
      <Link to="./settings/get-password"><h3>Reset password</h3></Link>
    </div>
  );
};

export default Settings;
