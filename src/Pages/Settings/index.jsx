import React from "react";
import { Link } from "react-router-dom";
//styles
import "./settings.scss";

const Settings = () => {
  return (
    <div className="">
      <div className="container__title-pane">Settings</div>
      <Link to="./settings/get-password">reset password</Link>
    </div>
  );
};

export default Settings;
