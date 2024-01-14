import React from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Home() {
  return (
    <section className="container-fluid my-home-page" id="home">
      <Row className="mt-auto p-4">
        <Col>
          <p>Welcome</p>
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <AnimatedTitle />
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <p>based in Cairo, Egypt.</p>
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <Button
            href="#portfolio"
            className="rounded-pill"
            variant="outline-success"
          >
            See My Work
          </Button>
        </Col>
      </Row>
      <Row className="mb-0 mt-auto">
        <Col>
          <a href="#about">
            <KeyboardArrowDownIcon className="arrow bounce" />
          </a>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
