import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Ready to Start Trading?</h2>
        <p>
          Join thousands of successful traders who have transformed their financial future with our expert guidance.
        </p>

        <div className="contact-actions">
          <a
            href="https://wa.me/917207358319"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Get Started on WhatsApp
          </a>

          <a
            href="mailto:info@tradersacademy.com"
            className="secondary-btn"
          >
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
