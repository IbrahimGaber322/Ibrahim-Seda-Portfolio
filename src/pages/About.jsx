import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SectionHeading from "../components/SectionHeading";
import profile, { education } from "../constants/profile";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" title="Engineer, builder, technical lead." />

        <div className="about">
          <div className="about__text reveal">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul className="facts">
              <li>
                <WorkOutlineIcon fontSize="small" />
                <span>
                  {profile.currently.title} at <strong>{profile.currently.company}</strong>
                </span>
              </li>
              <li>
                <PlaceOutlinedIcon fontSize="small" />
                <span>Based in {profile.location}, working with teams worldwide</span>
              </li>
              <li>
                <EmailOutlinedIcon fontSize="small" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </div>

          <aside className="card education reveal">
            <h3 className="card__title">
              <SchoolOutlinedIcon fontSize="small" /> Education
            </h3>
            <ol className="education__list">
              {education.map((e) => (
                <li key={e.org}>
                  <span className="education__years mono">
                    {e.from} – {e.to}
                  </span>
                  <strong>{e.title}</strong>
                  {e.link ? (
                    <a href={e.link} target="_blank" rel="noreferrer">
                      {e.org}
                    </a>
                  ) : (
                    <span className="muted">{e.org}</span>
                  )}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
