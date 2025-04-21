import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Myphoto from "../assests/image/dhinakaran2.png"; // ✅ fixed typo in path
import bgImage from "../../src/assests/image/wallpaper5.png"; // ✅ fixed typo i
import { motion } from "framer-motion";
//import Typewriter from "typewriter-effect";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
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
          <p className="navbar-brand m-0 fw-bold text-white"id="name">S.DHINAKARAN</p>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-center text-md-end">
              {["home", "about", "project", "resume", "contact"].map(
                (route) => (
                  <li className="nav-item" key={route}>
                    <NavLink
                      to={`/${route}`}
                      className={({ isActive }) =>
                        `nav-link text-white ${isActive ? "active-link" : ""}`
                      }
                    >
                      {route.toUpperCase()}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container py-5 mt-5">
          <div className="row align-items-center text-center text-md-start flex-column-reverse flex-md-row">
            {/* Text Section */}
            <div className="col-md-6 mt-4 mt-md-0" style={{ color: "#FFC0CB" }}>
              <h3 className="mb-4">
                I build modern, responsive web apps with a passion for clean
                design and intuitive user experiences.
              </h3>

              <h1 className="d-flex align-items-center justify-content-center justify-content-md-start text-warning">
                HI, I'M&nbsp;<span className="">DHINAKARAN </span>
              </h1>
            </div>

            {/* Image Section */}
            <motion.div
              className="col-md-6 d-flex justify-content-center mb-4 mb-md-0"
              animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={Myphoto}
                alt="Dhinkaran"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
