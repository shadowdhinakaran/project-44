import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import ResumePhoto from "../assests/image/resumeimage.png"; // ✅ Fixed path
import bgImage from "../assests/image/wallpaper5.png";     // ✅ Fixed path
import { motion } from "framer-motion";

export default function Resume() {
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

      <div style={{ position: "relative", zIndex: "1" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark px-3">
          <p className="navbar-brand m-0 fw-bold text-white">S.DHINAKARAN</p>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-center text-md-end">
              {["home", "about", "project", "resume", "contact"].map((route) => (
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
              ))}
            </ul>
          </div>
        </nav>

        {/* Resume Section */}
        <Container className="py-5 min-vh-100" id="resume">
          <h2 className="text-center text-white fw-bold mb-5 text-decoration-underline">
            Resume
          </h2>
          <Row className="align-items-center justify-content-center text-center text-md-start">
            {/* Resume Image */}
            <Col xs={12} md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={ResumePhoto}
                  alt="My Resume"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                  }}
                  className="img-fluid rounded"
                />
              </motion.div>
            </Col>

            {/* Resume Text and Button */}
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-white" style={{ maxWidth: "400px" }}>
                  <p className="mb-4">
                    I am a passionate Front-End Developer with strong skills
                    in React, Bootstrap, and responsive design. I love turning
                    designs into beautiful, functional web interfaces.
                  </p>
                  <a
                    href="/dhinaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="px-4 py-2 fw-semibold rounded-pill"
                    >
                      📄 View My Resume
                    </Button>
                  </a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
