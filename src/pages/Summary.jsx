import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ProgressBar from "react-bootstrap/ProgressBar";
import CV from "../cv/IbrahimGaber.pdf";

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
                The Engineering Department at Ain Shams University
                provides a comprehensive education, blending theory and
                practice. With experienced faculty, advanced laboratories, and a
                focus on innovation, it paves the way for students to achieve
                success in their engineering careers.
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
        <Col xxl={12}>
          <p className="title-2">My Skills</p>
        </Col>
        <Col className="pb-3" md={6}>
          <Stack gap={3}>
            <div className="skill-div">
              <p className="title-2">
                HTML<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                CSS<span>85%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={85} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                JavaScript<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                TypeScript<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                React<span>90%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={90} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                Next.js<span>90%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={90} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                Tailwind CSS<span>75%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={75} />
            </div>
          </Stack>
        </Col>
        <Col md={6}>
          <Stack gap={3}>
            <div className="skill-div">
              <p className="title-2">
                MongoDB<span>75%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={75} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                ExpressJs<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                NodeJs<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                PostgreSQL<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                Firebase<span>80%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={80} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                JSON<span>90%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={90} />
            </div>
            <div className="skill-div">
              <p className="title-2">
                Web Sockets/Hooks<span>70%</span>
              </p>
              <ProgressBar className="my-progess-bar" now={70} />
            </div>
          </Stack>
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
