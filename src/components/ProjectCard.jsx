import React, { memo } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import BrowserFrame from "./BrowserFrame";

const ProjectCard = memo(({ project, onPreview }) => {
  const { name, kind, imgSrc, description, keyFeatures, stack, visitLink, repos = [] } = project;

  return (
    <article className="card project reveal">
      <button
        type="button"
        className="project__media"
        onClick={() => onPreview(project)}
        aria-label={`Preview ${name}`}
        data-umami-event="Project preview"
        data-umami-event-project={name}
      >
        <BrowserFrame url={visitLink}>
          <img src={imgSrc} alt={`${name} preview`} loading="lazy" decoding="async" />
        </BrowserFrame>
        <span className="project__zoom">
          <ZoomOutMapIcon fontSize="inherit" /> Preview
        </span>
      </button>
      <div className="project__body">
        <p className="eyebrow eyebrow--sm">{kind}</p>
        <h3 className="project__title">
          <a href={visitLink} target="_blank" rel="noreferrer">
            {name} <ArrowOutwardIcon fontSize="inherit" />
          </a>
        </h3>
        <p className="project__desc">{description}</p>
        <ul className="project__features">
          {keyFeatures.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <ul className="tags">
          {stack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="project__links">
          <a
            href={visitLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn--sm btn--primary"
            data-umami-event="Project live demo"
            data-umami-event-project={name}
          >
            Live demo <ArrowOutwardIcon fontSize="inherit" />
          </a>
          {repos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn--sm btn--ghost"
              data-umami-event="Project code"
              data-umami-event-project={name}
            >
              <GitHubIcon fontSize="inherit" /> {r.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
