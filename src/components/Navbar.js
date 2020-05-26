import React from "react";
import "../styles/Navbar.css";

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
          <a href="/design" className="navbutton">
            Design
          </a>
          <a href="/code" className="navbutton">
            Code
          </a>
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
