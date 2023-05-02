import React from "react";
import "./OrderNow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const OrderNow = () => {
  return (<>
    <div className="order-now">
      <div className="order-now-content">
        <h2>Order Now!</h2>
        <p>
          Imagine stepping outside into your backyard on a warm summer day and
          being greeted by a beautiful, lush mango tree. Not only will it
          provide shade and beauty to your outdoor space, but it will also yield
          delicious, juicy mangoes for you and your loved ones to enjoy. Our
          mango tree plant is the perfect addition to any home, and with proper
          care and maintenance, it will flourish for years to come. Whether
          you're an experienced gardener or just starting out, our team is here
          to help answer any questions you may have and provide you with
          everything you need to get started. Don't miss out on the opportunity
          to bring a taste of the tropics to your own backyard. Order your mango
          tree plant today or inquire with us for more information!
        </p>
        <div className="order-now-buttons">
          <a href="https://wa.me/7043680686" target="_blank" className="whatsapp-button">
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>
          <Link to="/inquiry" className="inquire-button">
            <FontAwesomeIcon icon={faQuestionCircle} /> Inquire
          </Link>
          <Link to="/mainfooterforcall" className="callback-button">
            <FontAwesomeIcon icon={faPhone} /> Get a Callback
          </Link>
        </div>
      </div>
    </div>

<div id="divforbeforecontenttestimonialA" />

  </>);
};

export default OrderNow;
