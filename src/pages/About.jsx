import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stat from "../components/Stat";
import Info from "../components/Info";
function About(){
    return <section id="about" className="container-fluid my-about-page section-padding">
    <Row>
     <Col className="title-div mb-3 pb-3">
      <p className="title">Know Me More</p>
      <p className="back-title">ABOUT ME</p>
    </Col>
    </Row>
    <Row className="mt-3 mb-3 pb-3">
      <Col className="pb-4" lg={8}>
        <p className="desc-title">I'm <span>Ibrahim Gaber</span>, a Web Developer.</p>
        <p className="desc-text">
          I help you build brand for your business at an affordable price.
          Thousands of clients have procured exceptional results while
          working with our dedicated team. when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
         </p><p className="desc-text">
          Delivering work within time and budget which meets client’s
          requirements is our moto. Lorem Ipsum has been the industry's
          standard dummy text ever when an unknown printer took a galley.
        </p>
      </Col>
      <Col>
      <Info name="Ibrahim Gaber" email="ibrahimseda322@gmail.com" age="23" location="Cairo, Egypt" />
      <Button className="rounded-pill"  variant="success">Download CV</Button>
      </Col>
    </Row>
    <Row className="pt-3 mt-3">
      <Col xs={6} lg={3} className="stats-1">
      <Stat title="3+" desc="Months Experience" />
      </Col>
      <Col xs={6} lg={3} className="stats-2">
      <Stat title="2" desc="Happy Clients" />
      </Col>
      <Col xs={6} lg={3} className="stats-3">
      <Stat title="10+" desc="Projects Done" />
      </Col>
      <Col xs={6} lg={3} className="stats-4">
      <Stat title="0" desc="Awards" />
      </Col>
    </Row>
  </section>
}

export default About;