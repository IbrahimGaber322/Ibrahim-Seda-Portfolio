import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import BackToTop from "./components/BackToTop";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="my-app" fluid>
      <Header />
      <Home />
      <About />
      <Services />
      <Summary />
      <Portfolio />
      <Testimonial />
      <Contact />
      <BackToTop />
      <Footer />
    </Container>
  );
}

export default App;
