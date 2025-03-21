import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "Home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Home")}
              style={{ color: "#fff" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "Skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Skills")}
              style={{ color: "#fff" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Projects")}
              style={{ color: "#fff" }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="contact"
              onClick={() => console.log("connect")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
