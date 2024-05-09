import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} className="sitelogo" alt="logo" />
        </Link>
        <nav>
          <Link to="/host">Host</Link>
        </nav>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
