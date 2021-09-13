import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

//redux
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "./Store/store";
import { PersistGate } from 'redux-persist/integration/react'



const App = () => {
  const [isLogged, setIsLogged] = useState("");

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

            <Route path="/search-compagny" render={() => <SearchCompagny />} />
            <Route path="/compagny" render={() => <Compagny key={uuidv4()} />} />
            <Route path="/user-dashboard" render={() => <UserDashboard key={uuidv4()} />} />
            <Route path="/compagny-dashboard" render={() => <CompagnyDashboard key={uuidv4()} />} />
            <Route path="/users/sign-in" render={() => <UserSignIn user={{setIsLogged}}/>}/>
            <Route path="/companies/sign-in" render={() => <CompanySignIn/>}/>
            <Route path="/users/sign-up" render={() => <UserSignUp/>}/>
            <Route path="/companies/sign-up" render={() => <CompanySignUp/>}/>
            <Route path="/user/notifications" render={() => <Notifications />} />
            <Route path="/user/settings" render={() => <Settings />} />
          </main>
        </Switch>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));