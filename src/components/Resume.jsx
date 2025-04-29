import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import ResumePhoto from "../assests/image/resumeimage.png"; // ✅ Fixed path
import bgImage from "../assests/image/wallpaper5.png"; // ✅ Fixed path
import { AnimatePresence, motion } from "framer-motion";

export default function Resume() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [ismobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const menuLinks = ["home", "about", "project", "resume", "contact"];

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
          <p className="navbar-brand m-0 fw-bold text-white" id="name">
            S.DHINAKARAN
          </p>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-none d-md-block">
            <ul className="navbar-nav ms-auto text-center text-md-end">
              {menuLinks.map((route) => (
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

        {/* Sidebar for Mobile */}
        <AnimatePresence>
          {ismobile && isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
              {/* Close Icon */}
              <div className="d-flex gap-5 ">
                <p className="navbar-brand mt-1 fw-bold text-center" id="name">
                  S.DHINAKARAN
                </p>
                <button
                  type="button"
                  className="btn-close btn-close-white align-self-end mb-4"
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
                      className="nav-link text-white  bg-secondary rounded"
                      onClick={closeSidebar}
                      style={{ fontSize: "1.1rem" }}
                    >
                      {route.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume Section */}
        <Container className="py-5 min-vh-100" id="resume">
          <Row className="align-items-center justify-content-center text-center text-md-start">
            {/* Resume Image */}
            <Col
              xs={12}
              md={6}
              className="mb-4 mb-md-0 d-flex justify-content-center"
            >
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
                    I am a passionate Front-End Developer with strong skills in
                    React, Bootstrap, and responsive design. I love turning
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
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="mt-3 text-center">
                <h1 className="gradient-text">SKILLS</h1>
                <ul
                  className="list-unstyled d-flex flex-wrap justify-content-center gap-4 skills-icon"
                  style={{ textAlign: "justify" }}
                >
                  <li className="p-3 bg-warning text-white rounded-pill">
                    HTML
                  </li>
                  <li className="p-3 bg-success text-white rounded-pill">
                    CSS
                  </li>
                  <li className="p-3 bg-danger text-white rounded-pill">
                    JAVASCRIPT
                  </li>
                  <li className="p-3 bg-secondary text-white rounded-pill">
                    REACT.JS
                  </li>
                  <li className="p-3 bg-primary text-white rounded-pill">
                    BOOTSTRAP
                  </li>
                  <li className="p-3 bg-warning text-white rounded-pill">
                    GITHUB
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
