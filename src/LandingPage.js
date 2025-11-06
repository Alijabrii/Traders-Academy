import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const links = {
    facebook: "https://www.facebook.com/people/Traders-Shah/pfbid031pctmt6wCqRMi3bCX4KEQioZwPzyZwwgqDdKxvgT2KJsxpPKZj8cDXMobe5jFiuSl/?rdid=6ODfIhwkbYlXgbVr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DHQpHvMnH%2F",
    instagram: "https://www.instagram.com/traders_academy27/",
    youtube: "https://www.youtube.com/@traders_academy27",
    whatsapp: "https://wa.me/917777777", // Example format
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
