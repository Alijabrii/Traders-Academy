import React from "react";
import "../styles/mode.css";

function ModeOfLearning() {
  return (
    <section id="mode" className="mode">
      <h2>Mode of Learning</h2>

      <div className="mode-container">
        <div className="mode-item">
          <div className="mode-number">1</div>
          <div className="mode-content">
            <h3>Online Lessons</h3>
            <p>Online zoom session for 1-2 hrs </p>
          </div>
        </div>

        <div className="mode-item">
          <div className="mode-number">2</div>
          <div className="mode-content">
            <h3>Continue Learning</h3>
            <p>Missed the session ? No worries, Each session will be recorded you can access it later.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModeOfLearning;