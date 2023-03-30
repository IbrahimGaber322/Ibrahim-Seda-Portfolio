import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import images from "./images";
import { XMasonry, XBlock } from "react-xmasonry";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const PortfolioGallery = () => {
  const categories = ["All", "Designing", "Brand", "Photo"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [filteredImages, setFilteredImages] = useState(images);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredImages(
      category === "All"
        ? images
        : images.filter((image) => image.category?.includes(category))
    );
  };
  return (
    <>
      <Row>
        <Col xxl={12} >
        <Nav className="justify-content-center mb-5">
          {categories.map((category) => (
            <Nav.Item>
          <Nav.Link key={category}
              variant="outline-primary"
              className="mx-2 gallery-nav-link"
              active={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}>{category}</Nav.Link>
        </Nav.Item>
          ))}
          </Nav>
        </Col>
        <Col className="mb-5">
          <XMasonry targetBlockWidth="400" maxColumns={3}>
            {filteredImages.map((image) => {
              return (
                <XBlock key={image.id}>
                <div className="gallery-div">
                <img
                  className="w-100 rounded"
                  src={image.src}
                  alt={image.caption}
                  onClick={handleCategoryClick}
                />
            </div>
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
