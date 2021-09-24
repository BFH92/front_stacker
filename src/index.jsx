import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Styles/reset.scss";
import "./Styles/variables.scss";
import "./Styles/main.scss";
import "./Styles/MUIcancel.scss";
//Pages&Components
import Header from "./Components/Header/DesktopHeader";
import MobileHeader from "./Components/Header/MobileHeader";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Stacks from "./Pages/Stacks";
import SearchCompany from "./Pages/SearchCompany";
import UserDashboard from "./Pages/UserDashboard";
import CompanyDashboard from "./Pages/CompanyDashboard";
import Notifications from "./Pages/Notifications";
import Settings from "./Pages/Settings";
import UserSignIn from "./Pages/UserSignIn";
import UserSignUp from "./Pages/UserSignUp";
import CompanySignIn from "./Pages/CompanySignIn";
import CompanySignUp from "./Pages/CompanySignUp";
import NewPassword from "./Pages/NewPassword";
import GetPassword from "./Pages/Settings/GetPassword";
//redux
import { Provider } from "react-redux";
import { store, persistor } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";

// MUI Theme
import { ThemeProvider } from "@material-ui/core";
import LightTheme from "./Assets/Themes/LightTheme";
import DarkTheme from "./Assets/Themes/DarkTheme";

// NOTISTACK
import { SnackbarProvider, useSnackbar } from "notistack";
import { NotFoundPage } from "./Components/NotFoundPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLogged, setIsLogged] = useState("");

  const UserAndVisitorRoute = ({ component: Component, ...rest }) => {
    const LoggedAs = useSelector((state) => state.user.logged_as);
    const { enqueueSnackbar} = useSnackbar();
    if (LoggedAs === "company") {
      let variant = "warning";
      let message = `Il faut te connecter à un compte développeur pour continuer !`;
      enqueueSnackbar(message, { variant });
    }
    return (
      <Route
        {...rest}
        render={(props) =>
          LoggedAs === "company" ? (
            <Redirect to={{ pathname: "user/sign-in" }} />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };
  const CompanyRoute = ({ component: Component, ...rest }) => {
    const LoggedAs = useSelector((state) => state.user.logged_as);
    const { enqueueSnackbar} = useSnackbar();
    if (LoggedAs !== "company") {
      let variant = "warning";
      let message = `Un compte entreprise est nécessaire pour continuer`;
      enqueueSnackbar(message, { variant });
    }
    return (
      <Route
        {...rest}
        render={(props) =>
          LoggedAs === "company" ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "./sign-in" }} />
          )
        }
      />
    );
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector((state) => state.user.isLogged);
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogged ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/user/sign-in" }} />
          )
        }
      />
    );
  };

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        autoHideDuration={2500}
        disableWindowBlurListener={true}
        hideIconVariant
        preventDuplicate
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <div className="container__all">
                <Route
                  path="/"
                  render={() => <Header user={{ isLogged, setIsLogged }} />}
                />
                <Route
                  path="/"
                  render={() => (
                    <MobileHeader user={{ isLogged, setIsLogged }} />
                  )}
                />
                <main className="container__main">
                  <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/stacks" render={() => <Stacks />} />

                    <PrivateRoute
                      path="/user/dashboard"
                      component={UserDashboard}
                      key={uuidv4()}
                    />
                    <Route
                      path="/user/sign-in"
                      render={() => <UserSignIn user={{ setIsLogged }} />}
                    />
                    <Route
                      path="/user/sign-up"
                      render={() => <UserSignUp user={{ setIsLogged }} />}
                    />
                    <Route
                      path="/user/notifications"
                      render={() => <Notifications />}
                    />
                    <PrivateRoute
                      exact
                      path="user/settings"
                      component={Settings}
                      identity={"user"}
                    />

                    <Route
                      path="/user/settings/new-password"
                      render={() => (
                        <NewPassword user={{ setIsLogged, identity: "user" }} />
                      )}
                    />
                    <Route
                      path="/user/settings/get-password"
                      render={() => <GetPassword identity={"user"} />}
                    />

                    <UserAndVisitorRoute
                      path="/search"
                      component={SearchCompany}
                      key={uuidv4()}
                    />

                    <CompanyRoute
                      path="/company/dashboard"
                      component={CompanyDashboard}
                      key={uuidv4()}
                    />
                    <Route
                      path="/company/sign-in"
                      render={() => <CompanySignIn user={{ setIsLogged }} />}
                    />
                    <Route
                      path="/company/sign-up"
                      render={() => <CompanySignUp user={{ setIsLogged }} />}
                    />
                    <Route
                      path="/company/settings/new-password"
                      render={() => (
                        <NewPassword
                          user={{ setIsLogged, identity: "company" }}
                        />
                      )}
                    />
                    <Route
                      path="/company/settings/get-password"
                      render={() => <GetPassword identity={"company"} />}
                    />
                    <PrivateRoute
                      exact
                      path="/company/settings"
                      component={Settings}
                      identity={"company"}
                    />
                    <Route path="*" component={NotFoundPage} />
                  </Switch>
                </main>
              </div>
            </Router>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
