import React from "react";
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
import SearchCompagny from './Pages/SearchCompagny';
import Compagny from './Pages/Compagny';
import UserDashboard from './Pages/UserDashboard';
import CompagnyDashboard from './Pages/CompagnyDashboard';
import AsideNavbar from './Components/AsideNavbar';
import UserSignIn from "./Pages/UserSignIn";
import UserSignUp from "./Pages/UserSignUp";
import CompanySignIn from "./Pages/CompanySignIn";
import CompanySignUp from "./Pages/CompanySignUp";

//redux
import { Provider } from 'react-redux';
import { store, persistor } from "./Store/store";
import { PersistGate } from 'redux-persist/integration/react'



const App = () => {

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div className="container__all">
        <AsideNavbar />
        <Switch>
          <main className="container__main">
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/stacks" render={() => <Stacks />} />
            <Route path="/search-compagny" render={() => <SearchCompagny />} />
            <Route path="/compagny" render={() => <Compagny key={uuidv4()} />} />
            <Route path="/user-dashboard" render={() => <UserDashboard key={uuidv4()} />} />
            <Route path="/compagny-dashboard" render={() => <CompagnyDashboard key={uuidv4()} />} />
            <Route path="/users/sign-in" render={() => <UserSignIn/>}/>
            <Route path="/companies/sign-in" render={() => <CompanySignIn/>}/>
            <Route path="/users/sign-up" render={() => <UserSignUp/>}/>
            <Route path="/companies/sign-up" render={() => <CompanySignUp/>}/>
          </main>
        </Switch>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));