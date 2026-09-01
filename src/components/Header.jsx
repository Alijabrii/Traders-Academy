import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#features">About</a>
        <a href="#courses">Courses</a>
        <a href="#mode">Learning</a>
        <a href="#mentors">Mentors</a>
        <a href="#contact">Reviews</a>
        <a href="#contact" className="btn">Join Course</a>
      </nav>
    </header>
  );
}

export default Header;
