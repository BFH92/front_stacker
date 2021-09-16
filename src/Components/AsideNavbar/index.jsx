import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./asideNavbar.scss";
import Home from "../../Assets/Svg/AsideNavbar/Home";
import About from "../../Assets/Svg/AsideNavbar/About";
import Stacks from "../../Assets/Svg/AsideNavbar/Stacks";
import Login from "../../Assets/Svg/AsideNavbar/Login";
import Logout from "../../Assets/Svg/AsideNavbar/Logout";
// import StackerLogoPurple from '../../Assets/Svg/StackerLogo/StackerLogoPurple';

import { useDispatch, useSelector} from "react-redux";

import { useHistory } from "react-router";
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";
import { RegisterUserLogoutStatus } from "../../Store";
import CompaniesAPIManager from "../../Services/RailsApi/CompaniesFetch";

const AsideNavbar = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let logged_as
  logged_as = useSelector(state=> state.user.logged_as)

  const logout = async (e) => {
  
    e.preventDefault();
    let response;
    dispatch(RegisterUserLogoutStatus());
    logged_as === "company" ? response = await CompaniesAPIManager.logout() : response = await UsersAPIManager.logout();
  
    user.setIsLogged(false);
    console.log(response);
    history.push("/");
  };

  useEffect(() => {
    
    return () => {};
  }, [logged_as]);

  return (
    <div className="container__aside--nav--all">

      <nav className="container__aside--nav">
        <div className="container--top">
          {/* <StackerLogoPurple /> Logo de merde que j'arrive pas à mettre*/}
          <ul className="container__items">
            {logged_as === "company" ? (
              null
            ) : ( 
              <li className="item">
                <Link to="/search/company">
                  <div className="container--svg">
                    <Home />
                  </div>
                </Link>
              </li>
            )}
            <li className="item">
              <Link to="/stacks">
                <div className="container--svg">
                  <Stacks />
                </div>
              </Link>
            </li>
            <li className="item">
              <Link to="/about">
                <div className="container--svg">
                  <About />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container--bottom">
          <div className="container__items">
          {user.isLogged ? (
            <div className="item">
              <div className="container--svg" onClick={logout}>
                <Logout />
              </div>
            </div>
          ) : (
            <div className="item">
              <Link to="/user/sign-in">
                <div className="container--svg">
                  <Login />
                </div>
              </Link>
            </div>
          )}
          </div>
        </div>
      </nav>

      <div className="container__aside--nav--color"></div>

    </div>
  );
};

export default AsideNavbar;
