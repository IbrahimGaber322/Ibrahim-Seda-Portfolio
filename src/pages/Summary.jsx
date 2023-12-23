import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CV from "../cv/IbrahimGaber.pdf";
import Badge from "react-bootstrap/Badge";

function Summary() {
  return (
    <section
      className="container-fluid my-summary-page section-padding"
      id="summary"
    >
      <Row>
        <Col className="title-div mb-3 pb-3">
          <p className="title">Resume</p>
          <p className="back-title">SUMMARY</p>
        </Col>
      </Row>
      <Row className="gx-5 gy-5">
        <Col md={6}>
          <p className="title-2">My Education</p>
          <Stack gap={3}>
            <div className="summary-card p-4 rounded">
              <p className="summary-date rounded">2017 - 2022</p>
              <p className="title-2">Engineering</p>
              <p className="title-3">Ain Shams University</p>
              <p className="summary-desc">
                The Engineering Department at Ain Shams University provides a
                comprehensive education, blending theory and practice. With
                experienced faculty, advanced laboratories, and a focus on
                innovation, it paves the way for students to achieve success in
                their engineering careers.
              </p>
            </div>
          </Stack>
        </Col>
        <Col md={6}>
          <p className="title-2">Courses</p>
          <Stack gap={3}>
            <div className="summary-card p-4 rounded">
              <p className="summary-date rounded">2023</p>
              <p className="title-2">
                The Complete 2023 Web Development Bootcamp
              </p>
              <p className="title-3">Udemy</p>
              <p className="summary-desc">
                This web development course has equipped me with valuable skills
                and knowledge. I have built 16 projects, mastered technologies
                like JavaScript, React, and Node, and gained the ability to
                create any website. I can develop full-fledged websites and web
                apps, work as a freelance web developer, and apply professional
                best practices.
              </p>
            </div>
          </Stack>
        </Col>
      </Row>
      <Row className="mt-3 gx-5 ">
        <Col xxs={12} sm={3}>
          <p className="title-2">Programming Languages</p>
          <div
            style={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}
          >
            <Badge pill style={{ fontSize: 20 }} bg="success">
              BashScript
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              C
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="secondary">
              C++
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="danger">
              JavaScript
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="info">
              JQuery
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="warning">
              TypeScript
            </Badge>
          </div>
        </Col>
        <Col xxs={12} sm={3}>
          <p className="title-2">FrontEnd Technologies</p>
          <div
            style={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}
          >
            <Badge pill style={{ fontSize: 20 }} bg="success">
              HTML
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              CSS
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="secondary">
              Bootstrap
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="danger">
              ReactJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="warning">
              NextJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="dark">
              Redux
            </Badge>
            <Badge pill style={{ fontSize: 20, color: "black" }} bg="light">
              Material-U
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="info">
              shadcn/ui
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              Tailwind CSS
            </Badge>
          </div>
        </Col>
        <Col xxs={12} sm={3}>
          <p className="title-2">BackEnd Technologies</p>
          <div
            style={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}
          >
            <Badge pill style={{ fontSize: 20 }} bg="success">
              NodeJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              ExpressJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="secondary">
              NestJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="danger">
              NextJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="warning">
              NextJs
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="dark">
              MongoDB
            </Badge>
            <Badge pill style={{ fontSize: 20, color: "black" }} bg="light">
              PostgreSQL
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="info">
              MySQL
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              Firebase
            </Badge>
          </div>
        </Col>
        <Col xxs={12} sm={3}>
          <p className="title-2">Other Technologies</p>
          <div
            style={{ width: "100%", display: "flex", gap: 4, flexWrap: "wrap" }}
          >
            <Badge pill style={{ fontSize: 20 }} bg="success">
              Git
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="primary">
              Docker
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="secondary">
              Socket.IO
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="danger">
              Webhooks
            </Badge>
            <Badge pill style={{ fontSize: 20 }} bg="warning">
              WordPress
            </Badge>
          </div>
        </Col>
        <Col className="text-center mt-5 mb-5" xxl={12}>
          <Button href={CV} download="IbrahimGaber" className="rounded-pill">
            Download CV
          </Button>
        </Col>
      </Row>
    </section>
  );
}

export default Summary;
