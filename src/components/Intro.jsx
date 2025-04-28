import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import BgImage from "../../src/assests/image/wallpaper5.png";

// Menu Links Array
const menuLinks = ["home", "about", "project", "resume", "contact"];

const Intro = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);            
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Automatically close sidebar if resized to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

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
      {/* Dark overlay */}
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

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark px-3">
          <p className="navbar-brand m-0 fw-bold text-white" id="name">
            S.DHINAKARAN
          </p>

          {/* Toggle Button (only visible on mobile) */}
          {isMobile && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {/* Regular Nav Links on desktop */}
          <div className="collapse navbar-collapse d-none d-md-block">
            <ul className="navbar-nav ms-auto text-center text-md-end">
              {menuLinks.map((path) => (
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

        {/* Sidebar for Mobile */}
        {isMobile && isSidebarOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "250px",
              height: "100vh",
              backgroundColor: "rgb(0, 0, 0)",
              padding: "2rem 1rem",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Sidebar Header */}
            <div className="d-flex justify-content-between align-items-center w-100 mb-4">
              <p className="navbar-brand m-0 fw-bold text-white" id="name">
                S.DHINAKARAN
              </p>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={closeSidebar}
                style={{ fontSize: "1.5rem" }}
              ></button>
            </div>

            {/* Nav Links */}
            <ul className="navbar-nav w-100 text-center">
              {menuLinks.map((route) => (
                <li className="nav-item my-3" key={route}>
                  <NavLink
                    to={`/${route}`}
                    className={({ isActive }) =>
                      `nav-link text-white border border-success bg-secondary rounded`
                    }
                    onClick={closeSidebar}
                    style={{ fontSize: "1.1rem" }}
                  >
                    {route.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

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
