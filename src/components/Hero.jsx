import React from "react";
import heroImage from "../assets/hero.png"; // put image inside src/assets

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Master Trading</h1>
        <p>Professional stock & crypto trading education</p>
        <button className="primary-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTCnArZeIjlzMWX1ioIz4TAPqydVtIIZffBxAxWm91awf7AA/viewform?usp=header">Start Learning</a></button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Trading Education" />
      </div>
    </section>
  );
}

export default Hero;
