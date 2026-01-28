import React from "react";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">The Traders Academy</h2>
      <nav>
        <a href="#courses">Courses</a>
        <a href="#features">Why Us</a>
        <a href="#contact" className="btn">Join Now</a>
      </nav>
    </header>
  );
}

export default Header;
