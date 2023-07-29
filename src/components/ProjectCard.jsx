import React from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";

function ProjectCard({ project, isFlipped, onClick }) {
  const { imgSrc, keyFeatures, description, visitLink } = project;

  return (
    <ReactCardFlip
      infinite
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerStyle={{ width: "100%" }}
    >
      {/* Front of the card */}
      <div
        style={{ borderRadius: 20, overflow: "hidden", maxWidth: 1000 }}
        onClick={onClick}
      >
        <img
          width={"100%"}
          height={"auto"}
          style={{ maxHeight: 400 }}
          src={imgSrc}
          alt="project"
        />
      </div>

      {/* Back of the card */}
      <div
        style={{
          maxWidth: 1000,
          height: "fit-content",
          borderRadius: 20,
          padding: 15,
          color: "white",
          backgroundColor: "#111418",
        }}
      >
        <div onClick={onClick}>
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
