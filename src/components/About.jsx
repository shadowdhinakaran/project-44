import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Myphoto from "../assests/image/dhinakaran2.png"; // ✅ Fixed path
import { AnimatePresence, motion } from "framer-motion";
import bgImage from "../assests/image/wallpaper5.png"; // ✅ Fixed path

export default function About() {
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
                      className="nav-link text-primary border border-success rounded"
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

        {/* About Section */}
        <div className="container-fluid">
          <div className="row align-items-center py-5">
            {/* Text Section */}
            <motion.div
              className="col-12 col-md-6 mb-4 mb-md-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="px-4 px-sm-5 text-center text-md-start">
                <p className="fs-5 text-white text-para">
                  Hi, I'm{" "}
                  <strong style={{ color: "red" }}>S. Dhinakaran</strong> — a
                  passionate and detail-oriented web developer with a strong
                  foundation in front-end technologies like{" "}
                  <strong style={{ color: "red" }}>
                    HTML, CSS, JavaScript, React, and Bootstrap
                  </strong>
                  . I love building interactive, user-friendly interfaces and
                  enjoy learning new technologies to stay updated in the
                  ever-evolving tech space.
                </p>
                <p className="fs-5 text-white text-para">
                  I'm currently seeking opportunities to grow as a developer and
                  work on challenging projects that push my creative and
                  technical skills. Let's connect and build something amazing!
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="col-12 col-md-6 d-flex justify-content-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={Myphoto}
                alt="Dhinkaran"
                className="img-fluid rounded"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
