import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SectionHeading from "../components/SectionHeading";

const services = [
  {
    icon: AutoAwesomeOutlinedIcon,
    title: "AI agents & LLM systems",
    text: "Multi-stage Claude agents, semantic search and reranking pipelines, designed to be accurate and to stay affordable at scale.",
    points: ["Agent orchestration", "Embeddings & vector search", "Prompt caching & batch APIs"],
  },
  {
    icon: LayersOutlinedIcon,
    title: "Full-stack product engineering",
    text: "From data model to polished UI: typed APIs, clean component systems and real-time features users actually enjoy.",
    points: ["Next.js & React", "Node.js & TypeScript APIs", "Auth, RBAC & real-time chat"],
  },
  {
    icon: CloudQueueOutlinedIcon,
    title: "Cloud, DevOps & reliability",
    text: "Shipping continuously and keeping production healthy, with pipelines, observability and sensible architecture.",
    points: ["Cloud Run, AWS & Kubernetes", "CI/CD pipelines", "Datadog & DORA metrics"],
  },
  {
    icon: HubOutlinedIcon,
    title: "Integrations & automation",
    text: "Robust glue between systems: webhooks, schedulers and third-party APIs that survive rate limits and retries.",
    points: ["Email & WhatsApp workflows", "Idempotent jobs & cron", "Backoff & rate limiting"],
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow="What I do" title="How I can help your team.">
          I'm happiest owning a product end to end, but these are the areas where I add the most.
        </SectionHeading>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text, points }) => (
            <article key={title} className="card service reveal">
              <span className="service__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
