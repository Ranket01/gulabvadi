import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [subscriberData, setSubscriberData] = useState({
    nameOfVisitor: "",
    phoneOfVisitor: "",
  });

  const nameOfVisitor = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setSubscriberData({ ...subscriberData, nameOfVisitor: value });
  };
  const phoneOfVisitor = (e) => {
    const value = e.target.value;
    if (value.length !== 10) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setSubscriberData({ ...subscriberData, phoneOfVisitor: value });
  };

  const sendDataHandler = (e) => {
    e.preventDefault();
    if (phoneError || nameError) {
      return;
    }
    fetch(
      "https://gulabvadi-4169a-default-rtdb.asia-southeast1.firebasedatabase.app/SubscriberData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setSubscriberData({ nameOfVisitor: "", phoneOfVisitor: "" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay up-to-date with our latest news and updates.</p>

        <form className="subscribe-form" onSubmit={sendDataHandler}>
          <input
            type="string"
            placeholder="Enter your name"
            required
            onChange={nameOfVisitor}
            value={subscriberData.nameOfVisitor}
            style={{ borderColor: nameError ? "red" : "initial" }}
          />
          <input
            type="number"
            placeholder="Enter your mobile number"
            required
            onChange={phoneOfVisitor}
            value={subscriberData.phoneOfVisitor}
            style={{ borderColor: phoneError ? "red" : "initial" }}
          />
          <button type="submit">Call me</button>
        </form>

        {nameError && (
          <div style={{ color: "red" }}>Please enter your name</div>
        )}
        {phoneError && (
          <div style={{ color: "red" }}>
            Please enter a 10-digit phone number
          </div>
        )}
        {successMessage && (
          <div style={{ color: "green" }}>Data sent successfully! </div>
        )}

        <div className="media-icons-for-footer">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li> <Link to="/agro"> About Us</Link></li>
          <li><Link to="/agro">Our Services</Link></li>
          <li><Link to="/agro">Testimonials</Link></li>
          <li><Link to="/inquiry">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>Gulabvadi & Nursery, At Ratang Village</li>
          <li>Tehsil: Visavadar, District: Junagadh (Gujarat) </li>
          <li>(+91) 7043 680 686</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.718958074348!2d70.59929251670836!3d21.322118598109007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2af10129536e7%3A0x8714c4e04bbc640f!2sGulab%20vadi%20%26%20Nursery!5e0!3m2!1sen!2sin!4v1682690824860!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
