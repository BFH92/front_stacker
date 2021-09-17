import React from "react";
import './header.scss';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Settings from "../../Assets/Svg/Header/Settings";
import Notifications from '../../Assets/Svg/Header/Notifications';
import UserAvatar from './UserAvatar';
import Badge from '@material-ui/core/Badge';
import ThemeSwitch from './ThemeSwitch';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Nav from './NavTabs';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      flexGrow: 1,
      display: "grid",
      justifyContent: "start",
    },
    grid_column_auto: {
      display: "grid",
      gridAutoFlow: "column",
      placeItems: "center",
      gridGap: 20,
    }
  })
);

const Header = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Nav />
        <div className={classes.grid_column_auto}>        
          <ThemeSwitch />
          {isLogged ? (
            <div className={classes.grid_column_auto}>
              <Link to="/user/notifications">
                <Badge color="secondary" variant="dot">
                  <Notifications />
                </Badge>
              </Link>
              <Link to="/user/settings">
                <Settings />
              </Link>
              <UserAvatar />
            </div>
          ) : (
            <div className={classes.grid_column_auto}>
              <Button color="inherit">Se Connecter</Button>
              <Button color="inherit">S'inscrire</Button>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
