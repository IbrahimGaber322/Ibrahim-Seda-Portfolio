import React from "react";
import SectionHeading from "../components/SectionHeading";
import skillsGroups from "../constants/skills";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="05" eyebrow="Skills" title="Tools I reach for.">
          From LLM orchestration to the pipelines that ship it.
        </SectionHeading>
        <div className="skills-grid">
          {skillsGroups.map((group) => (
            <div key={group.title} className="card skill-card reveal">
              <h3 className="card__title">{group.title}</h3>
              <ul className="tags">
                {group.skills.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
