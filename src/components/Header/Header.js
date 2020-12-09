import React, { useState } from "react";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = ({ token, setUser }) => {
  return (
    <div>
      <nav>
        <div className="header-container">
          <div>
            <Link to="/">
              <img className="header-logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <Link className="icon-header">
            <p className="menu">Restaurants & stores</p>
            <FontAwesomeIcon icon="angle-double-down" className="icon" />
          </Link>
          <Link to="/feedthecow" className="icon-header">
            <p className="menu">Feed The Cow</p>
          </Link>
          {token ? (
            <button
              onClick={() => {
                setUser(null);
              }}
              className="header-button deco-button"
            >
              LogOut
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="button-signup header-button button-login-signup">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="header-button button-login-signup">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="sepa"></div>
    </div>
  );
};

export default Header;
