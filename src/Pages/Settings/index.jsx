import React from 'react';
import './settings.scss';
import {Link} from 'react-router-dom';
import SettingsHeader from '../../Components/SettingsHeader';

const Settings = () => {

  return (
    <div className="">
      <SettingsHeader/>
      <Link to="./settings/get-password">reset password</Link>
    </div>
  );
};

export default Settings;
