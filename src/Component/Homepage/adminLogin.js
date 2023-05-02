import React, { useContext, useState } from "react";
import styled from "styled-components";
import "./adminlogin.css";
import AdminPanel from "./AdminPanel";
import AuthContext from "./AuthContext";

const AdminLoginContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 32px;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const AdminLoginHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #0077ff;
  margin-bottom: 24px;
`;

const AdminLoginInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333333;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

const AdminLoginButton = styled.button`
  background-color: #0077ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005dbb;
  }
`;

const AdminLoginError = styled.p`
  color: #ff0000;
  margin-top: -8px;
  margin-bottom: 16px;
`;

const AdminLogin = () => {

  const authCtx = useContext(AuthContext)
  const adminIsLogged = authCtx.isLoggedIn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCn5y1kECpeIlveesaCkBDceXrae6e1gWw",
      // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn5y1kECpeIlveesaCkBDceXrae6e1gWw",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const data = await res.json();
          setError(data.error.message);
        }
      })
      .then((data) => {
        authCtx.login(data.idToken)
      });
  };

  return (
    <>
      {adminIsLogged && <AdminPanel />}
      {!adminIsLogged && (
        <AdminLoginContainer id="mylogincontainer">
          <AdminLoginHeader>Admin Login</AdminLoginHeader>
          <AdminLoginInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AdminLoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <AdminLoginError>{error}</AdminLoginError>}
          <AdminLoginButton onClick={handleLogin}>Login</AdminLoginButton>
        </AdminLoginContainer>
      )}

      <footer id="myadminpagefooter">
        <p>&copy; Gulabvadi {new Date().getFullYear()}</p>
        <p>
          {" "}
          <a href="#">Privacy Policy</a> <a href="#">Terms of use</a>{" "}
        </p>
      </footer>
    </>
  );
};

export default AdminLogin;
