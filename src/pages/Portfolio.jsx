import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioGallery from "../components/PortfolioGallery";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="my-portfolio-page section-padding container-fluid"
    >
      <Row>
        <Col className="title-div">
          <p className="title">My Work</p>
          <p className="back-title">PORTFOLIO</p>
        </Col>
      </Row>
      <Row>
        <PortfolioGallery />
      </Row>
    </section>
  );
}

export default Portfolio;
