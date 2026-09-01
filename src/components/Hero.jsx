import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-card">
          <div className="hero-wordmark" aria-label="TRADERS ACADEMY">
            <span>TRADERS</span>
            <span className="hero-shii">ACADEMY</span>
          </div>
        </div>

        <h1>Crypto &amp; Forex Mastery: From Rookie to Pro</h1>
        <p>Master the markets with proven strategies, expert mentorship, and live training. Your journey to trading success starts here.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTCnArZeIjlzMWX1ioIz4TAPqydVtIIZffBxAxWm91awf7AA/viewform?usp=header" className="primary-btn">Start Your Journey</a>
      </div>
    </section>
  );
}

export default Hero;
