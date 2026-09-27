import React from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import SectionHeading from "../components/SectionHeading";

const pipeline = [
  { icon: InboxOutlinedIcon, title: "Intake", text: "Applications via web, email & WhatsApp" },
  { icon: DocumentScannerOutlinedIcon, title: "CV parsing", text: "Text extraction with a vision-model fallback" },
  { icon: TravelExploreOutlinedIcon, title: "Retrieval", text: "Embeddings + vector search shortlist" },
  { icon: SortOutlinedIcon, title: "Rerank", text: "Cross-encoder narrows the candidates" },
  { icon: PsychologyOutlinedIcon, title: "Claude agents", text: "Multi-stage screening, cached & batched" },
  { icon: HandshakeOutlinedIcon, title: "Match", text: "Recruiter dashboards & real-time chat" },
];

const highlights = [
  {
    title: "Retrieval cascade",
    text: "Cheap vector search and reranking filter candidates before any LLM call, which significantly cut model costs.",
  },
  {
    title: "Cost-aware inference",
    text: "Prompt caching and batch-processing APIs make bulk candidate evaluation practical at scale.",
  },
  {
    title: "Isolated services",
    text: "Long-running AI workflows were split out of the monolith so they never block user-facing requests.",
  },
  {
    title: "Production ownership",
    text: "Architecture, Cloud Run deployments, CI/CD, incident response and reliability, as the sole technical lead.",
  },
];

const stack = ["Claude Agent SDK", "Node.js", "TypeScript", "Express", "Next.js", "MongoDB", "Vector search", "Cloud Run", "Cloud Build", "Notion API", "WhatsApp"];

function Featured() {
  return (
    <section id="featured" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Case study" title="An AI-powered hiring platform.">
          At Palm Outsourcing I designed and built a platform that takes a candidate from application to
          recruiter shortlist, with Claude agents doing the heavy lifting.
        </SectionHeading>

        <div className="card case reveal">
          <ol className="pipeline" aria-label="Candidate pipeline">
            {pipeline.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="pipeline__step" style={{ "--i": i }}>
                <span className="pipeline__icon">
                  <Icon fontSize="small" />
                </span>
                <strong>{title}</strong>
                <small>{text}</small>
              </li>
            ))}
          </ol>

          <div className="case__grid">
            {highlights.map((h) => (
              <div key={h.title} className="case__item">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>

          <ul className="tags case__stack">
            {stack.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Featured;
