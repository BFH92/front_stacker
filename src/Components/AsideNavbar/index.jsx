import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./asideNavbar.scss";
import Home from "../../Assets/Svg/AsideNavbar/Home";
import Search from "../../Assets/Svg/AsideNavbar/Search";
import About from "../../Assets/Svg/AsideNavbar/About";
import Stacks from "../../Assets/Svg/AsideNavbar/Stacks";
import Login from "../../Assets/Svg/AsideNavbar/Login";
import Logout from "../../Assets/Svg/AsideNavbar/Logout";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router";
import UsersAPIManager from "../../Services/RailsApi/UsersFetch";
import { RegisterUserLogoutStatus } from "../../Store";

const AsideNavbar = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  
  const logout = async (e) => {
    e.preventDefault();
    dispatch(RegisterUserLogoutStatus());
    const response = await UsersAPIManager.logout();
    user.setIsLogged(false);
    console.log(response);
    history.push("/");
  };

  useEffect(() => {
    console.log("changer le button");

    return () => {};
  }, [dispatch]);

  return (
    <nav className="container__aside--nav">
      <div className="container--top">
        <ul className="container__items">
          <li>
            <Link to="/" className="item">
              <div className="container--svg">
                <Home />
              </div>
              <label htmlFor="Bold/Home">Home</label>
            </Link>
          </li>
          <li className="item">
            <Link to="/search/company" className="item">
              <div className="container--svg">
                <Search />
              </div>
              <label htmlFor="Bold/Search">Search</label>
            </Link>
          </li>
          <li className="item">
            <Link to="/stacks" className="item">
              <div className="container--svg">
                <Stacks />
              </div>
              <label htmlFor="Bold/Stacks">Stacks</label>
            </Link>
          </li>
          <li className="item">
            <Link to="/about" className="item">
              <div className="container--svg">
                <About />
              </div>
              <label htmlFor="Bold/About">About</label>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container--bottom">
        {user.isLogged ? (
          <div className="item">
            <div className="container--svg" onClick={logout}>
              <Logout />
            </div>
            <label htmlFor="Bold/Logout">Logout</label>
          </div>
        ) : (
          <div className="item">
            <Link to="/users/sign-in">
              <div className="container--svg">
                <Login />
              </div>
              <label htmlFor="Bold/Login">Login</label>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AsideNavbar;
