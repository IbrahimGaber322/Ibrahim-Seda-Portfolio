import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CV from "../cv/IbrahimGaber.pdf";
import Badge from "react-bootstrap/Badge";
import skillsGroups, { getColors } from "../constants/skills";

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
        <Col xs={12}>
          <p className="title-2">My Experience</p>
          <Stack style={{ marginBottom: 3 }} gap={3}>
            <div className="summary-card p-4 rounded">
              <p className="summary-date rounded">10/2023 to 6/2024</p>
              <p className="title-2">Software Engineer</p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://iti.gov.eg/iti/9M/Intake%2044/intake-program-track/details/116"
                className="title-3-a"
              >
                ITI (Information Technology Institute)
              </a>
              <p className="summary-desc">
                <ul>
                  <li>
                    Demonstrated expertise in both frontend and backend
                    technologies, leading end-to-end development of responsive
                    web applications.
                  </li>
                  <li>
                    Utilized modern technologies to create dynamic,
                    user-friendly interfaces, contributing to the development of
                    innovative and efficient web applications.
                  </li>
                  <li>
                    Employed agile methodologies in collaborative teams,
                    ensuring timely delivery of high-quality software solutions.
                  </li>
                  <li>
                    Prioritized performance optimization and scalability,
                    enhancing overall application efficiency and responsiveness.
                  </li>
                  <li>
                    Resolved complex technical challenges, actively contributing
                    to system innovation and the integration of new features and
                    technologies.
                  </li>
                </ul>
              </p>
            </div>
          </Stack>
        </Col>
        <Col md={6}>
          <p className="title-2">My Education</p>
          <Stack gap={3}>
            <div className="summary-card p-4 rounded">
              <p className="summary-date rounded">2017 - 2022</p>
              <p className="title-2">Engineering</p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://eng.asu.edu.eg/"
                className="title-3-a"
              >
                Ain Shams University
              </a>
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                className="title-3-a"
              >
                Udemy
              </a>
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
        {skillsGroups.map((group) => (
          <Col xxs={12} sm={Math.ceil(12 / skillsGroups.length)}>
            <p className="title-2">{group?.title}</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              {group?.skills?.map((s, j) => (
                <Badge pill style={{ fontSize: 20 }} bg={getColors(j)}>
                  <span
                    style={{
                      color: `${
                        getColors(j) === "light" ? "black" : "inherit"
                      }`,
                    }}
                  >
                    {s}
                  </span>
                </Badge>
              ))}
            </div>
          </Col>
        ))}
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
