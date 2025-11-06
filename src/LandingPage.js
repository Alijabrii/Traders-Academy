import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const links = {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourprofile",
    youtube: "https://youtube.com/yourchannel",
    whatsapp: "https://wa.me/911234567890", // Example format
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Connect With Us</h1>
        <p className="subtitle">Follow us on social media</p>

        <div className="icon-container">
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
          >
            <FaFacebook />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="icon youtube"
          >
            <FaYoutube />
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} The Traders Academy 
      </footer>
    </div>
  );
};

export default LandingPage;
