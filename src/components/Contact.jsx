import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Join Traders Academy</h2>
        <p>
          Start your trading journey with expert mentorship and live market
          training.
        </p>

        <div className="contact-actions">
          <a
            href="https://wa.me/917207358319"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:info@tradersacademy.com"
            className="secondary-btn"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
