import React, { useState } from "react";
import "./InquireUsComponent.css"; // Import CSS file for styling
import Faq from "./Faq";

const InquireUsComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, settextarea] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInquiry = {
        nameofuser: name,
        email: email,
        phone: phone,
        message: textarea,
      };


      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInquiry),
      });

      if (response.ok) {
        // Form data sent successfully
        console.log("Form data sent successfully");
      } else {
        // Handle error response from backend
        console.error("Failed to send form data:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Failed to send form data:", error);
    }
    setSubmitSuccess(true);
  setName("");
  setEmail("");
  setPhone("");
  settextarea("");
  setTimeout(() => {
    setSubmitSuccess(false);
  }, 3000);
  };
  // You can implement your own logic here for submitting the feedback
  // For demo purposes, we'll just simulate a successful submission
  

  return ( <>
    <Faq/>
    <div className="inquire-us-container">
      <h2 className="inquire-us-heading" >Contact Form</h2>
      <form onSubmit={handleSubmit} className="inquire-us-form">
        <input
          type="text"
          name="name"
          id="myname"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          id="myemail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          id="myphone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          type="textarea"
          name="textarea"
          id="textarea"
          placeholder="Write your query"
          value={textarea}
          onChange={(e) => settextarea(e.target.value)}
          required
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      {submitSuccess && (
        <div className="success-message">Thank you for your feedback!</div>
      )}
      <div className="additional-info">
        For more information, please call us at:{" "} Bhautik Patel
        <span className="phone-number">+917043680686 </span>
        <br />
        Or reach us at:{" "}
        <span className="address">
          Gulabvadi & Nursery, At. Ratang, Tal- Visavadar,Dist-Junagadh
        </span>
      </div>
    </div>
    </> );
};

export default InquireUsComponent;
