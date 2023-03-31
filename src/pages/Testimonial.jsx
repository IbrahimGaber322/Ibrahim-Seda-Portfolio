import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCarousel from "../components/MyCarousel";

function Testimonial(){
return (
    <section id="testimonial" className="container-fluid my-testimonial-page section-padding">
    <Row>
     <Col className="title-div">
      <p className="title">Client Speak</p>
      <p className="back-title">TESTIMONIAL</p>
    </Col>
    </Row>
    <Row className="mb-5">
        <Col>
            <MyCarousel />
        </Col>
    </Row>
    </section>
);
}

export default Testimonial;