import React from "react";
import headerCSS from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../../app/userReducer";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav id="mainNavbar" sticky="true" className={`navbar navbar-light navbar-expand-lg py-0 align-items-center pe-5 ${headerCSS.stickyTop}`} >
      <a href="/" className="navbar-brand">
        <img className="d-none d-lg-block ml-3" src="./image/logo.png" alt="acm" width="250px" />
        <img className="d-sm d-lg-none" src="./image/logo.png" alt="acm" width="200px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navLinks">
        <ul className={`navbar-nav ${headerCSS.navbarNav}`}>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="#home" className={`nav-link ${headerCSS.navLink}`}>Overview</a>
          </li>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="#activities" className={`nav-link ${headerCSS.navLink}`}>Activities</a>
          </li>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="#features"className={`nav-link ${headerCSS.navLink}`}>Features</a>
          </li>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="#contact" className={`nav-link ${headerCSS.navLink}`}>Contact</a>
          </li>
          {!user ? (
            <>
              <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
                <a className={`btn mx-4 px-4 my-4 my-lg-2 ${headerCSS.btn1}`} href="/user/login" target="_blank" role="button">Login</a>
              </li>
              <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
                <a className={`btn px-4 my-lg-2 ${headerCSS.btn2}`} href="/user/register" target="_blank" role="button">Register</a>
              </li>
            </>
          ) : (
            <>
              <li className={`mx-auto ${headerCSS.navItem}`}>
                <a href="/codepen" className="navLink">Codepen</a>
              </li>
              <li className={`mx-auto ${headerCSS.navItem}`}>
                <a href="/forum" className="navLink">Discussion Forum</a>
              </li>
              <li className={`mx-auto ${headerCSS.navItem}`}>
                <a href="/problemset" className="navLink">Problemset</a>
              </li>
              <li className={`mx-auto ${headerCSS.navItem}`}>
                <a href="/complier" className="navLink">IDE</a>
              </li>
              <li className={`mx-auto ${headerCSS.navItem}`}>
                <a className={`nav-link dropdown-toggle ${headerCSS.navLink}`} data-bs-toggle="dropdown" href="#home" role="button" aria-expanded="false">Account</a>
                <ul className="dropdown-menu">
                  <li><Link to="/home"><button className="dropdown-item" onClick={logOut}>Logout</button></Link></li>
                </ul>
              </li>
            </>
          )}
        </ul>

      </div>
    </nav >
  );
};

export default Header;