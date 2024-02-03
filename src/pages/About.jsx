import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stat from "../components/Stat";
import CV from "../cv/IbrahimGaber.pdf";
import Info from "../components/Info";
function About() {
  const calcAge = (birthYear, birthMonth) => {
    const d = new Date();
    const y = d.getFullYear();
    const m = d.getMonth();
    let age = y - birthYear;
    if (m + 1 < birthMonth) {
      age--;
    }
    return age;
  };
  return (
    <section
      id="about"
      className="container-fluid my-about-page section-padding"
    >
      <Row>
        <Col className="title-div mb-3 pb-3">
          <p className="title">Know Me More</p>
          <p className="back-title">ABOUT ME</p>
        </Col>
      </Row>
      <Row className="mt-3 mb-3 pb-3">
        <Col className="pb-4" lg={8}>
          <p className="desc-title">
            I'm <span>Ibrahim Gaber</span>, a Web Developer.
          </p>
          <p className="desc-text">
            Experienced Full Stack Developer with a focus on producing impactful
            software solutions. Demonstrates proficiency in seamlessly
            integrating front-end and back-end components to craft user-friendly
            interfaces. Committed to writing efficient, clean code and enhancing
            system performance. A collaborative team member driven to achieve
            project success in dynamic settings
          </p>
          <p className="desc-text">
            Continuously expanding my knowledge and skills, I stay updated with
            the latest web development trends. With creativity and attention to
            detail, I develop responsive web applications and optimize user
            interfaces. Let's collaborate to create a meaningful digital
            presence for your business.
          </p>
        </Col>
        <Col>
          <Info
            name="Ibrahim Gaber"
            email="ibrahimseda322@gmail.com"
            age={calcAge(1999, 8)}
            location="Cairo, Egypt"
          />
          <Button
            href={CV}
            download="IbrahimGaber"
            style={{ color: "white" }}
            className="rounded-pill"
            variant="success"
          >
            Download CV
          </Button>
        </Col>
      </Row>
      <Row className="pt-3 mt-3">
        <Col xs={6} lg={4} className="stats-1">
          <Stat title="1+" desc="Years Experience" />
        </Col>
        <Col xs={6} lg={4} className="stats-2">
          <Stat title="5" desc="Happy Clients" />
        </Col>
        <Col xs={6} lg={4} className="stats-4">
          <Stat title="10+" desc="Projects Done" />
        </Col>
        {/* <Col xs={6} lg={3} className="stats-4">
      <Stat title="0" desc="Awards" />
      </Col> */}
      </Row>
    </section>
  );
}

export default About;
