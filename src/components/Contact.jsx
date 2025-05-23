import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import bgImage from "../assests/image/movingBlue.gif"; // ✅ fixed path
import {motion, AnimatePresence } from "framer-motion";

export default function Contact() {
 const [isSidebarOpen,setSidebarOpen] = useState (false);
 const [ismobile,setIsMobile] = useState(window.innerWidth < 768);

useEffect (() =>{
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if(window.innerWidth < 768 ){
      setSidebarOpen(false)
    }
  }
  window.addEventListener("resize",handleResize);
  return () => window.removeEventListener("resize",handleResize);
},[]);
const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
const closeSidebar = () => setSidebarOpen(false);

const menuLinks =  ["home", "about", "project", "resume", "contact"];


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form logic like sending data to a server or showing a toast
    alert("Message sent!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {/* Overlay */}
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

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark px-3">
          <p className="navbar-brand m-0 fw-bold "id="name">S.DHINAKARAN</p>
          <button className="navbar-toggler"
           type="button"
            onClick={toggleSidebar}>
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

        {/* Contact Section */}
        <div className="container py-5">
          <Row className="align-items-start justify-content-center">
            {/* Contact Form */}
            <Col md={6} className="mb-4">
              <Form
                className="rounded p-4 text-warning border border-light bg-dark bg-opacity-75"
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message" required />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" type="submit" className="px-4">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Col>

            {/* Social Icons */}
            <Col md={4} className="d-flex flex-column align-items-center gap-3 text-white">
              <p className="fw-semibold">Connect with me:</p>
              <div className="d-flex gap-4 icon-links ">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/shadowdhinakaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20connect%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="mailto:dhinakaran9003862687@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you"
                  className="icon-link"
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
