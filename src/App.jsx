import React, { useEffect } from "react";
import "./style.css";
import "./sections.css";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Featured from "./pages/Featured";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import useReveal from "./hooks/useReveal";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useSpotlight from "./hooks/useSpotlight";
import { loadAnalytics } from "./analytics";

function App() {
  useReveal();
  useSmoothScroll();
  useSpotlight();

  useEffect(() => {
    loadAnalytics();
    console.log(
      "%cHey, fellow developer 👋%c\nLike what you see? Let's talk: ibrahimseda322@gmail.com",
      "font: 700 16px Inter, sans-serif; color: #34d399",
      "font: 13px Inter, sans-serif; color: #8e97a6"
    );
  }, []);

  return (
    <>
      <div className="bg-decor" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Experience />
        <Featured />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
