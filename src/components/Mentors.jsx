import React from "react";

const mentors = [
  {
    name: "Aarav Mehta",
    role: "Swing Trading Mentor",
    focus: "Price action, risk control, and session planning",
    initials: "AM",
  },
  {
    name: "Sophia Clark",
    role: "Forex Mentor",
    focus: "Currency structure, market psychology, and execution",
    initials: "SC",
  },
  {
    name: "Daniel Brooks",
    role: "Crypto Strategist",
    focus: "Momentum trading, volatility, and portfolio discipline",
    initials: "DB",
  },
];

function Mentors() {
  return (
    <section id="mentors" className="mentors">
      <div className="section-heading">
        <p className="eyebrow">EXPERT GUIDANCE</p>
        <h2>Meet Our Mentors</h2>
      </div>

      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <article className="mentor-card" key={mentor.name}>
            <div className="mentor-avatar">{mentor.initials}</div>
            <h3>{mentor.name}</h3>
            <p className="mentor-role">{mentor.role}</p>
            <p className="mentor-focus">{mentor.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Mentors;
