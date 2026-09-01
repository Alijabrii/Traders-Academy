import React from "react";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="section-heading">
        <p className="eyebrow">OUR IMPACT</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievement-grid">
        <article className="achievement-card">
          <div className="achievement-value">10K+</div>
          <span className="achievement-label">Students Trained</span>
        </article>

        <article className="achievement-card">
          <div className="achievement-value">92%</div>
          <span className="achievement-label">Completion Rate</span>
        </article>

        <article className="achievement-card">
          <div className="achievement-value">1.5K+</div>
          <span className="achievement-label">Funded Accounts</span>
        </article>

        <article className="achievement-card">
          <div className="achievement-value">4.9/5</div>
          <span className="achievement-label">Average Rating</span>
        </article>
      </div>
    </section>
  );
}

export default Achievements;
