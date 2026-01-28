import React from "react";
import "../styles/course.css"

function Courses() {
  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>

      <div className="course-grid">
        {/* Phase 1 */}
        <div className="course-card">
          <h3>Phase 1: Introduction to Markets</h3>
          <ul>
            <li>Pairs & Candles</li>
            <li>TradingView Basics</li>
            <li>Timeframes</li>
            <li>SMC & ICT Introduction</li>
          </ul>
          <p><strong>Duration:</strong> 1 Day (Concepts)</p>
        </div>

        {/* Phase 2 */}
        <div className="course-card">
          <h3>Phase 2: Market Structure</h3>
          <ul>
            <li>Market Structure</li>
            <li>BOS & CHOCH</li>
            <li>Liquidity Basics</li>
            <li>Equal Highs & Lows</li>
            <li>Market Bias (HTF & LTF)</li>
          </ul>
          <p><strong>Duration:</strong> 2 Days + Practice</p>
        </div>

        {/* Phase 3 */}
        <div className="course-card">
          <h3>Phase 3: SMC Concepts</h3>
          <ul>
            <li>Order Blocks & Breaker Blocks</li>
            <li>Point of Interest (POI)</li>
            <li>AMD (Power of 3)</li>
            <li>FVG, IFVG & BPR</li>
            <li>Premium & Discount</li>
            <li>OTE (Fibonacci 62%)</li>
            <li>Session Timing (London & New York)</li>
            <li>Silver Bullet Strategy</li>
          </ul>
          <p><strong>Duration:</strong> 3 Days + Practice</p>
        </div>

        {/* Phase 4 */}
        <div className="course-card">
          <h3>Phase 4: Risk Management & Psychology</h3>
          <ul>
            <li>Trading Psychology</li>
            <li>Risk-to-Reward Management</li>
            <li>Capital Protection</li>
          </ul>
          <p><strong>Duration:</strong> 1 Day</p>
        </div>

        {/* Phase 5 */}
        <div className="course-card">
          <h3>Phase 5: Entry & Trade Execution</h3>
          <ul>
            <li>Timeframe Alignment</li>
            <li>Entry Models</li>
            <li>Stop Loss & Take Profit</li>
            <li>News-Based Setups</li>
            <li>Liquidity Entries</li>
          </ul>
          <p><strong>Duration:</strong> 2 Days + Live Practice</p>
        </div>

        {/* Mentorship */}
        <div className="course-card highlight">
          <h3>Mentorship Program</h3>
          <ul>
            <li>Live Market Sessions</li>
            <li>Personal Trade Reviews</li>
            <li>TradingView & MT5 Guidance</li>
            <li>Silver Bullet Mastery</li>
            <li>One-on-One Support</li>
          </ul>
          <p><strong>Ideal for:</strong> Serious Traders</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
