// Projects.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import bgImage from "../assests/image/movingBlue.gif";
import MyToto from "../assests/image/my_toto.PNG";
import MyWeather from "../assests/image/weather.PNG";
import Mylight from "../assests/image/lights.PNG";

// Reusable ProjectCard Component
function ProjectCard({ title, description, image, link, link2, index }) {
  return (
    <motion.div
      className="col-12 col-sm-6 col-md-4 mb-4 d-flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-100 shadow rounded-4 project-card w-100">
        <Card.Img
          variant="top"
          src={image}
          className="project-img rounded-4"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <Button
              variant="success"
              href={link}
              target="_blank"
              className="mt-auto"
            >
              Source Code
            </Button>
            <Button href={link2} target="_blank" className="mt-auto">
              View Project
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

// Main Projects Component
export default function Projects() {
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

  const projectData = [
    {
      title: "light App",
      description: "A Simple light on, off  built with React and Bootstrap.",
      image: Mylight,
      link: "https://github.com/shadowdhinakaran/light-app",
      link2: "https://light-app-51c6be.netlify.app/",
    },
    {
      title: "Todo App",
      description: "Simple and beautiful todo app using React + LocalStorage.",
      image: MyToto,
      link: "https://github.com/shadowdhinakaran/project-3.git",
      link2: "https://my-toto-109c82.netlify.app/",
    },
    {
      title: "Weather App",
      description: "Weather forecast app using OpenWeatherMap API.",
      image: MyWeather,
      link: "https://github.com/shadowdhinakaran/project--2.git",
      link2: "https://my-weather-app0001.netlify.app/",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
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
              {menuLinks.map((item) => (
                <li className="nav-item" key={item}>
                  <NavLink
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `nav-link text-white ${isActive ? "active-link" : ""}`
                    }
                  >
                    {item.toUpperCase()}
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

        {/* Projects Section */}
        <div className="min-vh-100 pt-5 ">
          <div className="row justify-content-center align-items-stretch">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
