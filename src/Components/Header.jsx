import React from "react";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
    
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} className="sitelogo" alt="logo" />
        </Link>
        <nav>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
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
        <button onClick={fakeLogOut}>X</button>
      </header>
    </div>
  );
};

export default Header;
