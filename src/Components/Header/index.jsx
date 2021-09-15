import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.scss";
import Notifications from "../../Assets/Svg/Header/Notifications";
import Settings from "../../Assets/Svg/Header/Settings";

const Header = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <header className="container__header">
      <div className="container__subnav">
        <ul>
          <li>
            <Link to="/company/dashboard">Espace Entreprise</Link>
          </li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      {isLogged ? (
        <div className="container__user--informations">
          <Link to="/user/notifications">
            <Notifications />
          </Link>
          <Link to="/user/settings">
            <Settings />
          </Link>
          <Link to="/user/dashboard">
            <p>User Name</p>
          </Link>
        </div>
      ) : (
        <h1>Stacker</h1>
      )}
    </header>
  );
};

export default Header;
