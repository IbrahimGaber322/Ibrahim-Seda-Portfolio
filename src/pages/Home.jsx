import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CountUp from "../components/CountUp";
import TechMarquee from "../components/TechMarquee";
import profile, { experience } from "../constants/profile";
import projects from "../constants/projects";
import CV from "../cv/IbrahimGaber.pdf";
import photo from "../images/personal image 3-cropped.jpg";

const words = ["AI-powered", "full-stack", "scalable", "delightful"];

const yearsSince = (date) =>
  Math.floor((Date.now() - date.getTime()) / (365.25 * 24 * 3600 * 1000));

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="rotator" aria-live="polite">
      <span key={words[i]} className="rotator__word gradient-text">
        {words[i]}
      </span>
    </span>
  );
}

function Home() {
  const stats = [
    { value: yearsSince(profile.careerStart), suffix: "+", label: "Years shipping production software" },
    { value: experience.length, suffix: "", label: "Companies across 3 countries" },
    { value: projects.length, suffix: "+", label: "Full-stack projects launched" },
  ];

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <a href="#experience" className="status-pill reveal">
            <span className="status-pill__dot" />
            {profile.currently.title} @ {profile.currently.company}
          </a>

          <h1 className="hero__title reveal">
            Hi, I'm Ibrahim.
            <span className="hero__sub">
              I build <RotatingWord />
              <br />
              products that ship.
            </span>
          </h1>

          <p className="hero__lead reveal">{profile.summary}</p>

          <div className="hero__actions reveal">
            <a href="#portfolio" className="btn btn--primary">
              View my work <ArrowForwardIcon fontSize="small" />
            </a>
            <a
              href={CV}
              download="IbrahimGaber-CV.pdf"
              className="btn btn--ghost"
              data-umami-event="Download CV"
              data-umami-event-location="hero"
            >
              <FileDownloadOutlinedIcon fontSize="small" /> Download CV
            </a>
          </div>

          <div className="hero__social reveal">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-umami-event="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-umami-event="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" data-umami-event="Email">
              <EmailOutlinedIcon />
            </a>
            <span className="hero__location">{profile.location}</span>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <div className="portrait__frame">
              <img src={photo} alt="Portrait of Ibrahim Gaber" />
            </div>
          </div>
          <div className="float-card float-card--top">
            <span className="mono">agents.run()</span>
            <small>Claude · multi-stage</small>
          </div>
          <div className="float-card float-card--bottom">
            <span className="mono">deploy ✓</span>
            <small>Cloud Run · CI/CD</small>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt>
                <CountUp to={s.value} suffix={s.suffix} />
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <TechMarquee />
    </section>
  );
}

export default Home;
