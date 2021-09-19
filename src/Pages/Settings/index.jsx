import React from 'react';
//styles
import './settings.scss';
//components

import { Link } from 'react-router-dom';


const Settings = () => {

  return (
    <div className="">
      <div className="container__title-pane">Settings</div>
      <Link to="./settings/get-password">reset password</Link>
    </div>
  );
};

export default Settings;
