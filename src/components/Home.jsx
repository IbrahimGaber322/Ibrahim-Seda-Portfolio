import React from "react";
import Container from "react-bootstrap/Container";
import AnimatedTitle from "./AnimatedTitle";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Home(){
    return  <Container id="home" className="my-home-page" fluid>
    <Row className="my-4"><p>Welcome</p></Row>
    <Row className="my-4"><AnimatedTitle /></Row>
    <Row className="my-4"><p>based in Cairo, Egypt.</p></Row>
    <Row className="mt-4 "><Button className="rounded-pill" variant="outline-success">Hire Me</Button></Row>
  </Container> 
  ;
}

export default Home;