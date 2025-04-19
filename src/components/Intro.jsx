import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import BgImage from "../../src/assests/image/wallpaper5.png";

const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div               
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Optional dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Everything inside needs to be layered above the overlay */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark px-3">
          <p className="navbar-brand m-0 fw-bold text-white" id="name">
            S.<span style={{ color: "yellow" }}>DHINAKA</span>
            <span style={{ color: "red" }}>RAN</span>
          </p>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-center text-md-end">
              {["home", "about", "project", "resume", "contact"].map((path) => (
                <li className="nav-item" key={path}>
                  <NavLink
                    to={`/${path}`}
                    className={({ isActive }) =>
                      `nav-link text-white ${isActive ? "active-link" : ""}`
                    }
                  >
                    {path.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Welcome Text */}
        <div className="d-flex justify-content-center align-items-center min-vh-100 text-center px-3">
          <h1 className="welcome text-white fw-bold">
            WELCOME TO MY PORTFOLIO WEBSITE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
