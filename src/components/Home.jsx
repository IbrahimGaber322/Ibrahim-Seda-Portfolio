import React from "react";
import Container from "react-bootstrap/Container";
import AnimatedTitle from "./AnimatedTitle";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home(){
    return  <Container id="home" className="my-home-page" fluid>
    <Row className="mt-auto p-4"><p>Welcome</p></Row>
    <Row className="p-4"><AnimatedTitle /></Row>
    <Row className="p-4"><p>based in Cairo, Egypt.</p></Row>
    <Row className="p-4"><Button className="rounded-pill" variant="outline-success">Hire Me</Button></Row>
    <Row className="mb-0 mt-auto"><a href="#about"><KeyboardArrowDownIcon className="arrow bounce" /></a></Row>
  </Container> 
  ;
}

export default Home;