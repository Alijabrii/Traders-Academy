import React from "react";
import heroImage from "../assets/hero.png";

function Header() {
  return (
    <header className="header">
      <img src={heroImage} alt="The Traders Academy" className="logo-image" />
      <nav>
        <a href="#courses">Courses</a>
        <a href="#contact" className="btn">Join Now</a>
      </nav>
    </header>
  );
}

export default Header;
