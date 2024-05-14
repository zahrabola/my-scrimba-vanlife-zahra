import React from "react";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} className="sitelogo" alt="logo" />
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "activelink" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activelink" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "activelink" : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="/login"
            className="loginlink"
          >
          login
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
