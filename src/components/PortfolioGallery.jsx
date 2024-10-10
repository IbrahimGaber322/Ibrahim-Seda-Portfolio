import React, { useState, useCallback, useMemo } from "react";
import Nav from "react-bootstrap/Nav";
import { XMasonry, XBlock } from "react-xmasonry";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../constants/projects";
import ProjectCard from "./ProjectCard";
import { debounce } from "lodash"; // Import lodash debounce

const PortfolioGallery = () => {
  const categories = projects.reduce(
    (acc, project) =>
      project.category
        ? acc.includes(project.category)
          ? acc
          : [...acc, project.category]
        : acc,
    ["All"]
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Use useMemo to create a stable debounced function
  const debouncedFilter = useMemo(
    () =>
      debounce((category) => {
        setSelectedCategory(category);
        setFilteredProjects(
          category === "All"
            ? projects
            : projects.filter((project) => project.category?.includes(category))
        );
      }, 300),
    []
  ); // Empty dependency array because debounce creates a stable function

  // Use useCallback to wrap the function call
  const handleCategoryClick = useCallback(
    (category) => {
      debouncedFilter(category);
    },
    [debouncedFilter]
  ); // Dependency on debouncedFilter

  return (
    <>
      <Row>
        <Col xxl={12}>
          <Nav className="justify-content-center mb-5">
            {categories.map((category) => (
              <Nav.Item key={category}>
                {" "}
                {/* Ensure keys are on the correct element */}
                <Nav.Link
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
            {filteredProjects.map((project) => (
              <XBlock key={project.name}>
                <ProjectCard project={project} />
              </XBlock>
            ))}
          </XMasonry>
        </Col>
      </Row>
    </>
  );
};

export default PortfolioGallery;
