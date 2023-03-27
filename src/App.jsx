import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Container from "react-bootstrap/Container";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Header from "./components/Header";
import Summary from "./components/Summary";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <Container className="my-app" fluid>
      <Home />
      <About />
      <Services />
      <Summary />
      <BackToTop />
    </Container>
  );
}

export default App;
