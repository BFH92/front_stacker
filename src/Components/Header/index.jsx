import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Notifications from '../../Assets/Svg/Header/Notifications';
import Settings from '../../Assets/Svg/Header/Settings';
import UserAvatarDropdown from './UserAvatarDropdown';
import Badge from '@material-ui/core/Badge';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {

  return (
    <header className="container__header">
      <div className="container__subnav">
        <ul>
          <li>
            <Link to="/compagny/dashboard">
              Espace Entreprise
            </Link>
          </li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
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
      </div>
    </header>
  );
};

export default Header;
