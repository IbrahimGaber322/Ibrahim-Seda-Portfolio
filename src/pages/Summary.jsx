import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CV from "../cv/IbrahimGaber.pdf";
import Badge from "react-bootstrap/Badge";
import skillsGroups, { getColors } from "../constants/skills";
import SummaryCard from "../components/SummaryCard";

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
            <SummaryCard title={"Software Engineer"} link={"https://iti.gov.eg/iti/9M/Intake%2044/intake-program-track/details/116"} dateFrom={"2023"} dateTo={"2024"} organization={"ITI (Information Technology Institute)"}
              description={[
                `Demonstrated expertise in both frontend and backend technologies, leading end-to-end development of responsive web applications.`,
                `Utilized modern technologies to create dynamic, user-friendly interfaces, contributing to the development of innovative and efficient web applications.`,
                `Employed agile methodologies in collaborative teams, ensuring timely delivery of high-quality software solutions.`,
                `Prioritized performance optimization and scalability, enhancing overall application efficiency and responsiveness.`,
                `Resolved complex technical challenges, actively contributing to system innovation and the integration of new features and technologies.`
              ]}
            />
            <SummaryCard title={"The Complete 2023 Web Development Bootcamp"} link={"https://www.udemy.com/course/the-complete-web-development-bootcamp/"} dateFrom={"2022"} dateTo={"2023"} organization={"Udemy"}
              description={[
                `Built 16 projects, mastering technologies like JavaScript, React, and Node.`,
                `Gained the ability to create any website, developing full-fledged websites and web apps.`,
                `Worked as a freelance web developer, applying professional best practices.`
              ]}
            />
            <SummaryCard title={"Engineering"} link={"https://eng.asu.edu.eg/"} dateFrom={"2017"} dateTo={"2022"} organization={"Ain Shams University"}
              description={[
                `Solved complex problems through critical thinking and advanced mathematics.`,
                `Participated in numerous courses, gaining a broad understanding of various engineering disciplines.`,
                `Engaged in multiple group projects, enhancing teamwork and collaboration skills.`,
                `Learned to apply theoretical knowledge to practical situations, bridging the gap between academia and industry.`,
                `Developed a strong foundation in engineering principles, preparing for a successful career in the field.`
              ]}
            />
          </Stack>
        </Col>
        <Col md={6}>
          <p className="title-2">My Experience</p>
          <Stack gap={3}>
            <SummaryCard title={"Software Engineer"} dateFrom={"2024"} organization={"Herrontech"} link={"https://herrontech.com/"}
              description={[
                `Contributed to the end-to-end development of responsive web applications, utilizing React for frontend, Node.js for backend, and MongoDB for database management.`,
                `Created dynamic, user-friendly interfaces using modern technologies and Atomic Design principles, enhancing the functionality and efficiency of web applications.`,
                `Collaborated within Agile teams to ensure the timely delivery of high-quality software solutions.`,
                `Focused on optimizing performance and scalability, improving overall application efficiency and responsiveness.`
              ]}
            />
            <SummaryCard title={"FullStack Software Engineer"} dateFrom={"2023"} dateTo={"2024"} organization={"Stryde"} link={"https://www.gostryde.com/"}
              description={[
                `Worked as a fullstack engineer at Stryde, a fintech startup based in UAE.`,
                `Built the app from the ground up using Next.js and TypeScript.`,
                `Utilized Prisma ORM with PostgreSQL for database modeling.`,
                `Developed everything from database models to API routes to screens and designs.`
              ]}
            />
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
                      color: `${getColors(j) === "light" ? "black" : "inherit"
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
