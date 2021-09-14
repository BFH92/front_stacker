import React from 'react';
//styles
import './settings.scss';
//components
import Header from '../../Components/Header';
import { UserForm } from '../../Components/Forms/UserForm';
import { CompanyForm } from '../../Components/Forms/CompanyForm';


const Settings = () => {

  return (
    <div className="">
      <Header />
      <div className="container__title-pane">Settings</div>
      <CompanyForm />
      <UserForm />
    </div>
  );
};

export default Settings;
