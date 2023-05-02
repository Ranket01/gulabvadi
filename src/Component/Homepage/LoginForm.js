import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import "firebase/auth";

function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignup) {
      // handle signup logic here

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn5y1kECpeIlveesaCkBDceXrae6e1gWw",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) {
          setErrors("Account Created Successfully")
          setEmail("")
          setPassword("")
          setPhoneNumber("")

        } else {
          return res.json().then(data=>{
            setErrors(data.error.message)
          });
        }
      });
    }
  };

  return (
    <>
      {" "}
      <div className={styles.mainpageclass}>
        <div className={styles.loginformcontainer}>
          <div className={styles.loginformwrapper}>
            <h2 className={styles.h2name}>{isSignup ? "Sign up" : "Log in"}</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputcontainer}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.inputname}
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  className={styles.inputname}
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {isSignup && (
                <div className={styles.inputcontainer}>
                  <label className={styles.label} htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className={styles.inputname}
                    type="number"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                </div>
              )}
              {errors && (<p style={{color:"red"}}>{errors}</p>)}
              <button type="submit" className={styles.submitbutton}>
                {isSignup ? "Sign up" : "Log in"}
              </button>
            </form>
            <button
              className={styles.togglebutton}
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Switch to log in" : "Switch to sign up"}
            </button>
            <div style={{ textAlign: "center", marginTop: "5px" }}>
              <Link to="/adminLogin"> Click here for Admin Login </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footerclassforlogin}>
        <p>&copy; Gulabvadi {new Date().getFullYear()}</p>
        <p>
          {" "}
          <a href="#">Privacy Policy</a> <a href="#">Terms of use</a>{" "}
        </p>
      </footer>
    </>
  );
}

export default LoginForm;
