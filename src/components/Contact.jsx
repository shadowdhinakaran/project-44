import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import bgImage from "../assests/image/wallpaper5.png"; // ✅ fixed path

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

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
          <p className="navbar-brand m-0 fw-bold text-white">S.DHINAKARAN</p>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
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

        {/* Contact Section */}
        <div className="container py-5">
          <h2 className="text-center text-white fw-bold mb-5 text-decoration-underline">
            Contact Me
          </h2>

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
              <div className="d-flex gap-4">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/shadowdhinakaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20connect%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="mailto:dhinakaran9003862687@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you"
                  className="text-white"
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
