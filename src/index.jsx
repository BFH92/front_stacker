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

const App = () => {

  return (
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
          </main>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));