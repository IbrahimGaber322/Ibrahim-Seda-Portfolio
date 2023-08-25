import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { XMasonry, XBlock } from "react-xmasonry";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";

const PortfolioGallery = () => {
  const categories = ["All", "Reactjs", "Reactjs + Nodejs", "Nextjs"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [filteredProjects, setFilteredProjects] = useState(projects);





  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(
      category === "All"
        ? projects
        : projects.filter((project) => project.category?.includes(category))
    );
  };
  return (
    <>
      <Row>
        <Col xxl={12}>
          <Nav className="justify-content-center mb-5">
            {categories.map((category) => (
              <Nav.Item>
                <Nav.Link
                  key={category}
                  variant="outline-primary"
                  className="mx-2 gallery-nav-link"
                  active={selectedCategory === category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col className="mb-5">
          <XMasonry maxColumns={2} targetBlockWidth={600}>
            {filteredProjects.map((project) => {
              return (
                <XBlock key={project.name}>
                  <ProjectCard
                    project={project}
                  />
                </XBlock>
              );
            })}
          </XMasonry>
        </Col>
      </Row>
    </>
  );
};

export default PortfolioGallery;
