import React, { useEffect, useState } from "react";
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
import background from "./images/back-ground.jpg";
import backgroundMob from "./images/back-ground-mob.jpg";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const backgroundImage = screenWidth > 576 ? background : backgroundMob;

  const [loading, setLoading] = useState(true);
  const handleBackgroundLoad = () => {
    setLoading(false); 
  };

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.365), black), url(${backgroundImage}`,
      }}
      className="my-app"
      fluid
    >
      <img
        src={backgroundImage}
        alt="Background"
        style={{ display: "none" }} 
        onLoad={handleBackgroundLoad}
      />
      {loading&&<div className="loader-background"><div className="loader">Loading...</div></div>}
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
