import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SVGTest from '../../../Assets/Svg/BinDelete';
import '../DesktopHeader/header.scss';
import { useDispatch, useSelector} from "react-redux";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import UsersAuthManager from "../../../Services/RailsApi/UsersFetch/UsersAuthManager";
import { RegisterUserLogoutStatus } from "../../../Store";
import CompaniesAuthManager from "../../../Services/RailsApi/CompaniesFetch/CompaniesAuthManager";
import { useSnackbar } from 'notistack';
import NavTabsMobile from './NavTabsMobile';
import NotificationDrawer from '../DesktopHeader/NotificationDrawer';
import UserMenu from '../DesktopHeader/UserMenu';
import VisitorMenu from '../DesktopHeader/VisitorMenu';
import BurgerMenu from "./BurgerMenu";

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

const MobileHeader = ({ user }) => {
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
    history.push("/");
  };

  useEffect(() => {    
    return () => {};
  }, [logged_as]);

  return (
    <AppBar position="static" className="desktop--mobile">
      <Toolbar>
        <NavTabsMobile />
          <div className={classes.grid_column_auto}>
            {isLogged ? (
              <div className={classes.grid_column_no_gap}>
                <NotificationDrawer />
                <UserMenu logout={logout}/>
              </div>
            ) : (
              <VisitorMenu />
              )}
          </div>
        <BurgerMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
