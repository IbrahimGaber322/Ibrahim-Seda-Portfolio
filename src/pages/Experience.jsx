import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../constants/profile";

const VISIBLE = 3;

function ExperienceItem({ job }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? job.highlights : job.highlights.slice(0, VISIBLE);
  const hidden = job.highlights.length - VISIBLE;

  return (
    <li className="timeline__item reveal">
      <span className="timeline__dot" aria-hidden="true" />
      <article className="card job">
        <header className="job__head">
          <div>
            <h3>{job.role}</h3>
            <p className="job__company">
              {job.link ? (
                <a href={job.link} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              <span className="muted"> · {job.location}</span>
            </p>
          </div>
          <span className={`job__date mono ${job.to === "Present" ? "is-current" : ""}`}>
            {job.from} — {job.to}
          </span>
        </header>

        <p className="job__summary">{job.summary}</p>

        <ul className="job__highlights">
          {shown.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {hidden > 0 && (
          <button type="button" className="link-btn" onClick={() => setExpanded((e) => !e)}>
            {expanded ? "Show less" : `Show ${hidden} more`}
          </button>
        )}

        <ul className="tags">
          {job.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading index="03" eyebrow="Experience" title="Where I've worked." />
        <ol className="timeline">
          {experience.map((job) => (
            <ExperienceItem key={job.company} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
