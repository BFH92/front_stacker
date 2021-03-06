import React, { useEffect } from "react";
import './header.scss';
import { useDispatch, useSelector} from "react-redux";
import ThemeSwitch from './ThemeSwitch';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavTabs from './NavTabs';
import UserMenu from "./UserMenu";
import VisitorMenu from './VisitorMenu';
import { useHistory } from "react-router";
import UsersAuthManager from "../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { RegisterUserLogoutStatus } from "../../Store";
import CompaniesAuthManager from "../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import NotificationDrawer from '../../Components/Header/NotificationDrawer';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 999
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
      gridGap: 10,
    },
    grid_column_no_gap: {
      display: "grid",
      gridAutoFlow: "column",
      placeItems: "center",
    }
  })
);

const Header = ({ user }) => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const loggedAs = useSelector((state) => state.user.logged_as);
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const history = useHistory();
  const dispatch = useDispatch();

  let logged_as
  logged_as = useSelector(state=> state.user.logged_as)

  const logout = async (e) => {
    let response;
    dispatch(RegisterUserLogoutStatus());
    logged_as === "company" ? response = await CompaniesAuthManager.logout() : response = await UsersAuthManager.logout();
    let variant = 'success'
    let message = `Vous avez été déconnecté avec succès`
    enqueueSnackbar(message, { variant });
    user.setIsLogged(false);
  };

  useEffect(() => {    
    return () => {};
  }, [logged_as]);
  
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <NavTabs />
        <div className={classes.grid_column_auto}>        
          {/* <ThemeSwitch /> */}
          {isLogged ? (
            <div className={classes.grid_column_no_gap}>
              <NotificationDrawer />
              {/* {loggedAs === "user" ?
              (
                <UserSettingsDrawer />
              )
              :
              (
                <CompanySettingsDrawer />
              )
              } */}
              <UserMenu logout={logout}/>
            </div>
          ) : (
            <VisitorMenu />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
