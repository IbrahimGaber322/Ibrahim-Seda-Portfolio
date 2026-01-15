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
            <SummaryCard
              title={"Engineering"}
              link={"https://eng.asu.edu.eg/"}
              dateFrom={"2017"}
              dateTo={"2022"}
              organization={"Ain Shams University"}
              description={[
                `Solved complex problems through critical thinking and advanced mathematics.`,
                `Participated in numerous courses, gaining a broad understanding of various engineering disciplines.`,
                `Engaged in multiple group projects, enhancing teamwork and collaboration skills.`,
                `Learned to apply theoretical knowledge to practical situations, bridging the gap between academia and industry.`,
                `Developed a strong foundation in engineering principles, preparing for a successful career in the field.`,
              ]}
            />
            <SummaryCard
              title={"Software Engineer"}
              link={
                "https://iti.gov.eg/iti/9M/Intake%2044/intake-program-track/details/116"
              }
              dateFrom={"10/2023"}
              dateTo={"06/2024"}
              organization={"ITI (Information Technology Institute)"}
              description={[
                `Demonstrated expertise in both frontend and backend technologies, leading end-to-end development of responsive web applications.`,
                `Utilized modern technologies to create dynamic, user-friendly interfaces, contributing to the development of innovative and efficient web applications.`,
                `Employed agile methodologies in collaborative teams, ensuring timely delivery of high-quality software solutions.`,
                `Prioritized performance optimization and scalability, enhancing overall application efficiency and responsiveness.`,
                `Resolved complex technical challenges, actively contributing to system innovation and the integration of new features and technologies.`,
              ]}
            />
          </Stack>
        </Col>
        <Col md={6}>
          <p className="title-2">My Experience</p>
          <Stack gap={3}>
            <SummaryCard
              title={"Software Engineer"}
              dateFrom={"06/2024"}
              dateTo={"06/2025"}
              organization={"Herrontech"}
              link={"https://herrontech.com/"}
              description={[
                `Built and maintained production-grade web applications across the full stack using React, Node.js, and MongoDB.`,
                `Designed clean, scalable UI architectures based on Atomic Design, delivering intuitive and accessible user experiences.`,
                `Worked closely within Agile teams to translate business requirements into reliable, high-quality software.`,
                `Improved application performance and maintainability through thoughtful refactoring and optimization.`,
              ]}
            />

            <SummaryCard
              title={"Software Engineer"}
              dateFrom={"06/2025"}
              organization={"VOIS"}
              link={"https://www.voiscentre.com/"}
              description={[
                `Developed and maintained enterprise-grade web platforms using React and Node.js in a cloud-native environment.`,
                `Designed and implemented reusable UI components following Atomic Design and modern frontend best practices.`,
                `Built and maintained CI/CD pipelines using Azure DevOps and GitHub Actions, ensuring fast and reliable deployments.`,
                `Owned pipeline debugging and workflow optimization, reducing build failures and deployment friction.`,
                `Integrated Datadog and DevLake to deliver accurate end-to-end DORA metrics and engineering insights.`,
                `Worked extensively with AWS services and Kubernetes, managing deployments and operations using kubectl.`,
                `Optimized DynamoDB queries for performance and cost efficiency in production systems.`,
                `Extended Backstage by building custom plugins and components to enhance developer experience.`,
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
