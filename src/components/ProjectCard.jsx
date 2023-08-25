import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";

function ProjectCard({ project }) {
  const { imgSrc, keyFeatures, description, visitLink } = project;
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <ReactCardFlip infinite isFlipped={flipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div
        style={{ borderRadius: 20, overflow: "hidden", margin:5 }}
        onClick={handleClick}
      >
        <img width={"100%"} src={imgSrc} alt="project" />
      </div>

      {/* Back of the card */}
      <div
        style={{
          borderRadius: 20,
          padding: 15,
          color: "white",
          backgroundColor: "#111418",
        }}
      >
        <div onClick={handleClick}>
          <h3>
            <span style={{ color: "#20C997" }}>Key</span> Features:
          </h3>
          <ul>
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-center">{description}</p>
        </div>
        <div className="d-grid gap-2">
          <Button
            href={visitLink}
            target="blank"
            style={{ color: "#20C997" }}
            variant="outline-dark"
            size="lg"
          >
            Visit Project
          </Button>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default ProjectCard;
