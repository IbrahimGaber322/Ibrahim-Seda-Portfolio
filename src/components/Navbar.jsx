import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function MyNavbar() {
  const [klass, setKlass] = useState("my-nav-bar");
  const [style, setStyle] = useState({ backgroundColor: "rgba(0, 0, 0, 0)" });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [position, setPosition] = useState("false");
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (lastScrollY < 100) {
        // if scroll down hide the navbar
        setStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
        setPosition("false");
        setKlass("my-nav-bar");
      } else if (lastScrollY >= 80 && lastScrollY < 110) {
        // if scroll up show the navbar
        setKlass("hidden");
      } else if (lastScrollY >= 110) {
        setStyle({ backgroundColor: "#111418" });
        setKlass("my-nav-bar");
        setPosition("top");
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
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
  }, [lastScrollY]);
  return (
    <Navbar
      style={style}
      className={klass}
      fixed={position}
      collapseOnSelect
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand className="my-navbar-brand" href="#home">Ibrahim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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

export default MyNavbar;
