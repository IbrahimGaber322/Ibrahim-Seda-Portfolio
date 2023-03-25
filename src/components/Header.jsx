import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [style, setStyle] = useState({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"visible"});
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 100) {
        setStyle({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"visible" });
      } else if (window.scrollY >= 80 && window.scrollY < 200) {
        setStyle({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"hidden" });
      } else if (window.scrollY >= 200) {
        setStyle({ backgroundColor: "#111418", visibility:"visible", transition: "all 1s ease" });
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", controlNavbar);
      };
    }
  });
  return (
    <Navbar
      style={style}
      className="my-nav-bar"
      sticky="top"
      collapseOnSelect
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand className="my-navbar-brand" href="#home">Ibrahim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ><MenuIcon style={{color:"white"}} /></Navbar.Toggle> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#u">About</Nav.Link>
            <Nav.Link href="#e">What I Do</Nav.Link>
            <Nav.Link href="#g">Resume</Nav.Link>
            <Nav.Link href="#f">Portfolio</Nav.Link>
            <Nav.Link href="#d">Client</Nav.Link>
            <Nav.Link href="#s">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="facebook" className="my-nav-icon" href="#deets">
              <FacebookIcon />
            </Nav.Link>
            <Nav.Link id="linkedin" className="my-nav-icon" href="#memes">
              <LinkedInIcon />
            </Nav.Link>
            <Nav.Link id="github" className="my-nav-icon" href="#memes">
              <GitHubIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
