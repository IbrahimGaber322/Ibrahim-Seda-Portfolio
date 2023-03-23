import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function About(){
    return <Container id="about" className="my-about-page" fluid>
    <Row>
      <h1>ABOUT ME</h1>
      <h2>Know Me More</h2>
    </Row>
    <Row>
      <Col lg={8}>
        <h3>I'm Ibrahim Seda, a Web Developer</h3>
        <p>
          I help you build brand for your business at an affordable price.
          Thousands of clients have procured exceptional results while
          working with our dedicated team. when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
         </p><p>
          Delivering work within time and budget which meets client’s
          requirements is our moto. Lorem Ipsum has been the industry's
          standard dummy text ever when an unknown printer took a galley.
        </p>
      </Col>
      <Col>
       <h4>Name: Ibrahim Seda</h4>
      <h4>Email: <a href="">ibrahimseda322@gmail.com</a></h4>
      <h4>Age: 23</h4>
      <h4 style={{border:"none"}}> From: Cairo, Egypt</h4>
      <Button className="rounded-pill"  variant="success">Download CV</Button>
      </Col>
    </Row>
    <Row className="pt-5 mt-3">
      <Col className="my-border-right">
      <h5>3+</h5>
      <h6>Months Experience</h6>
      </Col>
      <Col className="my-border-right">
      <h5>2</h5>
      <h6>Happy Clients</h6>
      </Col>
      <Col className="my-border-right">
      <h5>10+</h5>
      <h6>Projects Done</h6>
      </Col>
      <Col className="text-center">
      <h5>0</h5>
      <h6>Awards</h6>
      </Col>
    </Row>
  </Container> ;
}

export default About;