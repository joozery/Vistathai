import React from "react";
import "./Contact.css";
import mapImage from "../assets/image.webp"; // รูปแผนที่

// นำเข้าไอคอนจาก React Icons
import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-wrapper">
        <div className="contact-content">
          <div className="contact-header">
            <h1>How can we help you?</h1>
            <p className="location-title">Our location</p>
            <h2>
              In the heart of the vibrant city of Bangkok - Thailand, at the
              center of its financial district
            </h2>
          </div>
          <div className="contact-details">
            <h3>Stay in touch</h3>
            <div className="contact-item">
              <div className="contact-text">
                <p>Email our team</p>
                <span>We are here to help!</span>
              </div>
              <a
                href="mailto:support@fundingpips.com"
                className="contact-button"
              >
                support@fundingpips.com
              </a>
            </div>
          </div>
          <div className="social-media">
            <h3>Follow us</h3>
            <div className="social-icons">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <img src={mapImage} alt="Bangkok Map" className="map-image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
