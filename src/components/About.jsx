import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function About(){
    return <Container id="about" className="my-about-page" fluid>
    <Row className="title-div mb-3 pb-3">
      <p className="title">Know Me More</p>
      <p className="back-title">ABOUT ME</p>
    </Row>
    <Row className="mt-3 mb-3 pb-3">
      <Col lg={8}>
        <p className="desc-title">I'm Ibrahim Gaber, a Web Developer.</p>
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
       <p className="my-info">Name: Ibrahim Gaber</p>
      <p className="my-info">Email: <a href="">ibrahimseda322@gmail.com</a></p>
      <p className="my-info">Age: 23</p>
      <p className="my-info" style={{border:"none"}}> From: Cairo, Egypt</p>
      <Button className="rounded-pill"  variant="success">Download CV</Button>
      </Col>
    </Row>
    <Row className="pt-5 mt-5 stats">
      <Col xs={6} lg={3} className="stats-1">
      <p className="stats-title">3+</p>
      <p className="stats-desc">Months Experience</p>
      </Col>
      <Col xs={6} lg={3} className="stats-2">
      <p className="stats-title">2</p>
      <p className="stats-desc">Happy Clients</p>
      </Col>
      <Col xs={6} lg={3} className="stats-3">
      <p className="stats-title">10+</p>
      <p className="stats-desc">Projects Done</p>
      </Col>
      <Col xs={6} lg={3} className="stats-4">
      <p className="stats-title">0</p>
      <p className="stats-desc">Awards</p>
      </Col>
    </Row>
  </Container> ;
}

export default About;