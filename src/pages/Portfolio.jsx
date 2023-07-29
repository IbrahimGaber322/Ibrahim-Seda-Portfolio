import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/ProjectCard";
import WebWeave from "../images/WebWeave gif.gif";
import bitnine from "../images/bitnine.jpg";
import alam from "../images/3alam.gif";
import reiz from "../images/reiz.gif";

function Portfolio() {
  const [flipped, setFlipped] = useState({});

  const projects = [
    {
      imgSrc: WebWeave,
      keyFeatures: [
        "Simple and User-Friendly Interface",
        "Post Creation and Interaction",
        "Profile Customization",
        "Edit Your Posts",
        "Complete Account Features",
        "Expand Your Network",
        "Real-time Friend Request Notifications",
      ],
      description:
        "Join WebWeave today and explore the possibilities of meaningful online connections.",
      visitLink: "https://webweave.onrender.com/",
    },
    {
      imgSrc: bitnine,
      keyFeatures: [
        "Developed bilingual single-page website with captivating animations using React.",
        "Created RESTful API server with Express and PostgreSQL, including user authentication.",
        "Utilized essential packages for security and hosted PostgreSQL on Render.com.",
        "Conducted comprehensive testing for reliable functionality.",
      ],
      description:
        "Visit Bitnine and explore the captivating animations and functionality of this website.",
      visitLink: "https://bitnine.onrender.com/",
    },
    {
      imgSrc: alam,
      keyFeatures: [
        "Developed a unique and attractive company website using Next.js, React, and TypeScript.",
        "Utilized server-side rendering for performance and SEO benefits.",
        "Incorporated smooth animations and interactive elements for an enhanced user experience.",
        "Implemented Material-UI icons and components for a consistent UI design.",
      ],
      description:
        "Explore the attractive design and interactive elements of the 3alam company website.",
      visitLink: "https://next-3r88-6pva73934-ibrahimgaber322.vercel.app/",
    },
    {
      imgSrc: reiz,
      keyFeatures: [
        "Created a React web app for sorting countries by size, continent, and alphabetical order.",
        "Utilized Material-UI and Emotion CSS-in-JS for a responsive UI.",
        "Integrated restcountries.com API to fetch country data.",
      ],
      description:
        "Explore the features and sorting functionality of the Countries web app.",
      visitLink: "https://countries-ghr6.onrender.com/",
    },
  ];

  const handleClick = (index) => {
    setFlipped((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <ProjectCard
              project={project}
              isFlipped={flipped[index]}
              onClick={() => handleClick(index)}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;
