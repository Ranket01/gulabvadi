import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Homepage/Navbar.css";
import LogoGulab from '../Homepage/Images/gulabvadiLogo.jpeg'
import AuthContext from "./AuthContext";

export default function Navbar() {

  const authCtx = useContext(AuthContext)
  const adminIsLogged = authCtx.isLoggedIn


  return (
    <nav
      className="navbar  navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <img src={LogoGulab} style={{height:"2rem", marginRight:"10px"}} />
        <Link className="navbar-brand" to="/">
          <strong>Gulabvadi </strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/">
                <b> Home</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/agro">
                <b> Nursery </b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/inquiry">
                <b> Inquiry</b>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">


          {adminIsLogged &&   <button style={{
                marginRight: "10px",
                textDecoration: "none",
                cursor: "pointer",
                backgroundColor: "rgb(136 122 255)",
                color: "#333",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
              
              >
              <strong>
                Logout 
                </strong>
            </button>}


              {!adminIsLogged && <button style={{
                marginRight: "10px",
                textDecoration: "none",
                cursor: "pointer",
                backgroundColor: "rgb(136 122 255)",
                color: "#333",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
              
              >
              <strong>
               <Link to="/adminLogin" style={{ textDecoration: "none", color: "#333" }}> Login </Link>
                </strong>
            </button>  }

             


             

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
