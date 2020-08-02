import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="leftNavStyles">
          <a href="/" className="logo">
            EP
          </a>
        </div>
        <div className="rightNavStyles">
          <Link to="/design" className="navbutton">
            Design
          </Link>
          <Link to="/code" className="navbutton">
            Code
          </Link>
          <a href="#contact" className="navbutton">
            Contact
          </a>
          <a href="#contact" className="navbutton">
            Find Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
