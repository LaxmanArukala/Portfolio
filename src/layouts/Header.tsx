import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [header, setHeader] = useState("header");
  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 73) {
      return setHeader("bg-transparent  p-4");
    } else if (window.scrollY > 70) {
      return setHeader("bg-theme-secondary bd-sticky p-4");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      {/* bg-transparent */}
      <Navbar expand="lg" className={header}>
        <Container>
          <Link to="/" className="navbar-brand">
            React-Bootstrap
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/" className="nav-link">
                Services
              </Link>
              <Link to="/" className="nav-link">
                Work
              </Link>
              <Link to="/" className="nav-link">
                Job History
              </Link>
              <Link to="/" className="nav-link">
                My Demos
              </Link>
              <Link to="/" className="nav-link">
                Contact me
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
