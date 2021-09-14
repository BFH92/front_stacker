import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Styles/reset.scss';
import './Styles/variables.scss';
import './Styles/main.scss';

// import Header from './Components/Header'; À importer dans les autres components
import Home from './Pages/Home';
import About from './Pages/About';
import Stacks from './Pages/Stacks';
import SearchCompany from './Pages/SearchCompany';
import Company from './Pages/Company';
import UserDashboard from './Pages/UserDashboard';
import CompanyDashboard from './Pages/CompanyDashboard';
import Notifications from './Pages/Notifications';
import Settings from './Pages/Settings';
import AsideNavbar from './Components/AsideNavbar';
import UserSignIn from "./Pages/UserSignIn";
import UserSignUp from "./Pages/UserSignUp";
import CompanySignIn from "./Pages/CompanySignIn";
import CompanySignUp from "./Pages/CompanySignUp";
import NewPassword from "./Pages/NewPassword";
import GetPassword from "./Pages/Settings/GetPassword";

//redux
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "./Store/store";
import { PersistGate } from 'redux-persist/integration/react'



const App = () => {
  const [isLogged, setIsLogged] = useState("");

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.user.isLogged)
    console.log(isLogged)
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
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div className="container__all">
        <AsideNavbar  user={{isLogged, setIsLogged}}/>
        <Switch>
          <main className="container__main">
            <Route path="/" exact render={() => <Home/>} />
            <Route path="/about" render={() => <About />} />
            <Route path="/stacks" render={() => <Stacks />} />

            <Route path="/user/dashboard" render={() => <UserDashboard key={uuidv4()} />} />
            <Route path="/user/sign-in" render={() => <UserSignIn user={{setIsLogged}}/>}/>
            <Route path="/user/sign-up" render={() => <UserSignUp/>}/>
            <Route path="/user/notifications" render={() => <Notifications />} />
            <PrivateRoute path="/user/settings" component={Settings} identity={"user"} />
            {/* <Route exact path="/user/settings" render={() => <Settings identity={"user"}/>} /> */}
            <Route path="/user/settings/new-password" render={() => <NewPassword user={{setIsLogged,identity:"user"}}/>} />
            <Route path="/user/settings/get-password" render={() => <GetPassword identity={"company"}/>} />
          
            <Route path="/search/company" render={() => <SearchCompany />} />
            <Route exact path="/company" render={() => <Company key={uuidv4()} />} />
            <Route path="/company/dashboard" render={() => <CompanyDashboard key={uuidv4()} />} />
            <Route path="/company/sign-in" render={() => <CompanySignIn/>}/>
            <Route path="/company/sign-up" render={() => <CompanySignUp/>}/>
            <Route path="/company/settings/new-password" render={() => <NewPassword user={{setIsLogged, identity:"company"}}/>} />
            <Route path="/company/settings/get-password" render={() => <GetPassword identity={"company"}/>} />
            <PrivateRoute path="/company/settings" component={Settings} identity={"company"} />
            {/* <Route exact path="/company/settings" render={() => <Settings/>} /> */}

          </main>
        </Switch>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));