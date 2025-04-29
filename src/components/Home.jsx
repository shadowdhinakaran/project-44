import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Myphoto from "../assests/image/dhinakaran2.png";
import bgImage from "../../src/assests/image/wallpaper5.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [ismobile,setIsMobile]= useState(window.innerWidth < 768);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if(window.innerWidth< 768){
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize",handleResize);
    return() =>window.removeEventListener("resize",handleResize);
  },[])
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

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark px-3">
          <p className="navbar-brand m-0 fw-bold text-white" id="name">
            S.DHINAKARAN
          </p>

          {/* Hamburger only on mobile */}
          <button
            className="navbar-toggler d-block d-md-none"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
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

        {/* Hero Section */}
        <section className="container py-5 mt-5">
          <div className="row align-items-center text-center text-md-start flex-column-reverse flex-md-row">
            {/* Text Section */}
            <div className="col-md-6 mt-4 mt-md-0" style={{ color: "#FFC0CB" }}>
              <h3 className="mb-4">
                I build modern, responsive web apps with a passion for clean
                design and intuitive user experiences.
              </h3>

              {/* <h1 className="d-flex align-items-center justify-content-center justify-content-md-start text-warning">
                HI, I'M&nbsp;<span>S.DHINAKARAN</span>
              </h1> */}
             <div className="typewriter d-flex align-items-center justify-content-center justify-content-md-start ">
             <span className="static-text">HI,I'M&nbsp;
             <span className="text dhinakaran">Dhinakaran</span>
             <span className="text webdeveloper">Web Developer</span>
             </span>
            </div>              
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
