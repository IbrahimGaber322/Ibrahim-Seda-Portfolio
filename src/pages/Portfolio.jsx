import React, { useCallback, useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Lightbox from "../components/Lightbox";
import projects from "../constants/projects";

function Portfolio() {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );
  const [selected, setSelected] = useState("All");
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);
  const visible =
    selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHeading index="06" eyebrow="Selected work" title="Things I've built.">
          Personal and side projects across different stacks. Click a preview to see it in motion.
        </SectionHeading>

        <div className="filters reveal" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={selected === c}
              className={`filter ${selected === c ? "is-active" : ""}`}
              onClick={() => setSelected(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} onPreview={setPreview} />
          ))}
        </div>
      </div>
      {preview && <Lightbox project={preview} onClose={closePreview} />}
    </section>
  );
}

export default Portfolio;
