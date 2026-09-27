import React from "react";
import claude from "../images/tech/claude.svg";
import anthropic from "../images/tech/anthropic.svg";
import typescript from "../images/tech/typescript.svg";
import javascript from "../images/tech/javascript.svg";
import nodejs from "../images/tech/nodejs.svg";
import react from "../images/tech/react.svg";
import nextjs from "../images/tech/nextjs.svg";
import nestjs from "../images/tech/nestjs.svg";
import express from "../images/tech/express.svg";
import mongodb from "../images/tech/mongodb.svg";
import postgresql from "../images/tech/postgresql.svg";
import dynamodb from "../images/tech/dynamodb.svg";
import gcp from "../images/tech/gcp.svg";
import aws from "../images/tech/aws.svg";
import docker from "../images/tech/docker.svg";
import kubernetes from "../images/tech/kubernetes.svg";
import githubactions from "../images/tech/githubactions.svg";
import tailwind from "../images/tech/tailwind.svg";
import angular from "../images/tech/angular.svg";
import django from "../images/tech/django.svg";
import python from "../images/tech/python.svg";

// Single-colour (black) logos become white silhouettes, two-tone dark logos are
// colour-inverted, and the rest are shown in grayscale until hovered.
const mono = new Set(["Claude", "Anthropic", "Express", "Django", "AWS"]);
const inverted = new Set(["Next.js"]);

const logos = [
  ["Claude", claude],
  ["Anthropic", anthropic],
  ["TypeScript", typescript],
  ["Node.js", nodejs],
  ["React", react],
  ["Next.js", nextjs],
  ["NestJS", nestjs],
  ["Express", express],
  ["MongoDB", mongodb],
  ["PostgreSQL", postgresql],
  ["DynamoDB", dynamodb],
  ["Google Cloud", gcp],
  ["AWS", aws],
  ["Docker", docker],
  ["Kubernetes", kubernetes],
  ["GitHub Actions", githubactions],
  ["Tailwind CSS", tailwind],
  ["Angular", angular],
  ["Django", django],
  ["Python", python],
  ["JavaScript", javascript],
];

function TechMarquee() {
  // Rendered twice so the CSS animation can loop seamlessly.
  const row = (hidden) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {logos.map(([name, src]) => (
        <li key={name} className={`marquee__item ${mono.has(name) ? "is-mono" : ""} ${inverted.has(name) ? "is-inverted" : ""}`}>
          <img src={src} alt={hidden ? "" : name} loading="lazy" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default TechMarquee;
