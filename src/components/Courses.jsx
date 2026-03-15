import React, { useState } from "react";
import "../styles/course.css"

function Courses() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section id="courses" className="courses">
      <h2>Comprehensive Trading Curriculum</h2>

      <div className="course-grid">
        {/* Phase 1 */}
        <div className="course-card" onClick={() => toggleCard(0)}>
          <div className="course-header">
            <h3>Phase 1: Introduction to Markets</h3>
            <span className={`toggle-icon ${openCard === 0 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 0 && (
            <div className="course-content">
              <ul>
                <li>Pairs & Candles</li>
                <li>TradingView Basics</li>
                <li>Timeframes</li>
                <li>SMC & ICT Introduction</li>
              </ul>
              <p><strong>Duration:</strong> 1 Day (Concepts)</p>
            </div>
          )}
        </div>

        {/* Phase 2 */}
        <div className="course-card" onClick={() => toggleCard(1)}>
          <div className="course-header">
            <h3>Phase 2: Market Structure</h3>
            <span className={`toggle-icon ${openCard === 1 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 1 && (
            <div className="course-content">
              <ul>
                <li>Market Structure</li>
                <li>BOS & CHOCH</li>
                <li>Liquidity Basics</li>
                <li>Market Bias</li>
              </ul>
              <p><strong>Duration:</strong> 2 Days + Practice</p>
            </div>
          )}
        </div>

        {/* Phase 3 */}
        <div className="course-card" onClick={() => toggleCard(2)}>
          <div className="course-header">
            <h3>Phase 3: SMC Concepts</h3>
            <span className={`toggle-icon ${openCard === 2 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 2 && (
            <div className="course-content">
              <ul>
                <li>Order Blocks & Breaker Blocks</li>
                <li>Point of Interest (POI)</li>
                <li>AMD </li>
                <li>FVG, IFVG & BPR</li>
                <li>Premium & Discount</li>
                <li>Fibonacci</li>
                <li>Market Session Timing</li>
              </ul>
              <p><strong>Duration:</strong> 3 Days + Practice</p>
            </div>
          )}
        </div>

        {/* Phase 4 */}
        <div className="course-card" onClick={() => toggleCard(3)}>
          <div className="course-header">
            <h3>Phase 4: Risk Management & Psychology</h3>
            <span className={`toggle-icon ${openCard === 3 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 3 && (
            <div className="course-content">
              <ul>
                <li>Trading Psychology</li>
                <li>Risk Management</li>
                <li>Trade Management</li>
              </ul>
              <p><strong>Duration:</strong> 1 Day</p>
            </div>
          )}
        </div>

        {/* Phase 5 */}
        <div className="course-card" onClick={() => toggleCard(4)}>
          <div className="course-header">
            <h3>Phase 5: Entry & Trade Execution</h3>
            <span className={`toggle-icon ${openCard === 4 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 4 && (
            <div className="course-content">
              <ul>
                <li>Timeframe Alignment</li>
                <li>Entry Models (More than 5)</li>
                <li>Stop Loss & Take Profit</li>
              </ul>
              <p><strong>Duration:</strong> 2 Days + Live Practice</p>
            </div>
          )}
        </div>

        {/* Mentorship */}
        <div className="course-card highlight" onClick={() => toggleCard(5)}>
          <div className="course-header">
            <h3>Mentorship Program</h3>
            <span className={`toggle-icon ${openCard === 5 ? 'open' : ''}`}>▼</span>
          </div>
          {openCard === 5 && (
            <div className="course-content">
              <ul>
                <li>Live Market Sessions</li>
                <li>Personal Trade Reviews</li>
                <li>TradingView & MT5 Guidance</li>
                <li>One-on-One Support</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Courses;
