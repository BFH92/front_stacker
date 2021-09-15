import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Settings from "../../Assets/Svg/Header/Settings";
import './header.scss';
import Notifications from '../../Assets/Svg/Header/Notifications';
import UserAvatarDropdown from './UserAvatarDropdown';
import Badge from '@material-ui/core/Badge';
import ThemeSwitch from './ThemeSwitch';

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
    { isLogged ? (
      <div className="container__user--informations">
        <ThemeSwitch />
        <Link to="/user/notifications">
          <Badge color="secondary" variant="dot">
            <Notifications />
          </Badge>
        </Link>
        <Link to="/user/settings">
          <Settings />
        </Link>
        <UserAvatarDropdown />
      </div>)
      : (
        <h1>Stacker</h1>
      )}
    </header>
  );
};

export default Header;
