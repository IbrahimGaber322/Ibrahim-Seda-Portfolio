import React, { useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [style, setStyle] = useState({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"visible"});
  const [active, setActive] = useState("home");
  useEffect(() => {
  const controlNavbar = () => {
    let pos = window.scrollY;
    if (typeof window !== "undefined") {
      if (pos < 100) {
        setStyle({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"visible" });
      } else if (pos >= 80 && pos < 200) {
        setStyle({ backgroundColor: "rgba(0, 0, 0, 0)", visibility:"hidden" });
      } else if (pos >= 200) {
        setStyle({ backgroundColor: "#111418", visibility:"visible", transition: "all 1s ease" });
      }
    }
  }
  controlNavbar();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", controlNavbar);
      };
    }
    
  },[]);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const currentScrollPos = window.scrollY;
      let currentSectionId = "home";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentScrollPos >= sectionTop - sectionHeight / 2) {
          currentSectionId = section.getAttribute("id");
        }
      });
  
      setActive(`#${currentSectionId}`);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <Navbar
      style={style}
      className="my-nav-bar"
       fixed="top"
      collapseOnSelect
      expand="lg"

    >
      <Container fluid>
        <Navbar.Brand className="my-navbar-brand" href="#home">Ibrahim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ><MenuIcon style={{color:"white"}} /></Navbar.Toggle> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link active={active === "#home" ? true : false} href="#home">Home</Nav.Link>
            <Nav.Link active={active === "#about" ? true : false} href="#about">About</Nav.Link>
            <Nav.Link active={active === "#services" ? true : false} href="#services">What I Do</Nav.Link>
            <Nav.Link active={active === "#summary" ? true : false} href="#summary">Resume</Nav.Link>
            <Nav.Link active={active === "#portfolio" ? true : false} href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link active={active === "#testimonial" ? true : false} href="#testimonial">Client</Nav.Link>
            <Nav.Link active={active === "#contact" ? true : false} href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="facebook my-nav-icon" href="#deets">
              <FacebookIcon />
            </Nav.Link>
            <Nav.Link className="linkedin my-nav-icon" href="#memes">
              <LinkedInIcon />
            </Nav.Link>
            <Nav.Link className="github my-nav-icon" href="#memes">
              <GitHubIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
