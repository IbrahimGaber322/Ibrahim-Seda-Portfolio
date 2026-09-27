import React, { useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionHeading from "../components/SectionHeading";
import profile from "../constants/profile";
import AdhamPhoto from "../images/testimonials/adham-khatean.png";
import HassanPhoto from "../images/testimonials/hassan-hamdy.png";
import MedhatPhoto from "../images/testimonials/medhat-fawzy.png";
import MohammadPhoto from "../images/testimonials/mohammad-taleb.png";
import AmrPhoto from "../images/Amr Mohammed.jpg";
import MohamedGaberPhoto from "../images/Mohamed Gaber.jpg";

// `highlight` is always a verbatim excerpt from the quote.
const testimonials = [
  {
    name: "Adham Khatean",
    title: "Senior Software Engineer @ VOIS · Instructor @ ITI",
    relation: "Senior colleague at VOIS",
    date: "Jun 2026",
    photo: AdhamPhoto,
    highlight: "Focuses on getting things right, not just done.",
    quote: [
      "Ibrahim is one of those engineers who combines strong technical depth with very clear communication.",
      "What really stood out to me is his ability to dig into complex systems and uncover aspects that aren't always obvious, then make the right decisions about them, or explain them in a structured and practical way that made a big difference in helping the team understand edge cases and make better decisions.",
      "He brings a solid problem-solving mindset, strong ownership, and consistently focuses on getting things right, not just done.",
      "It's always a great experience working with Ibrahim, and I'd definitely recommend him to any team looking for a high-impact engineer.",
    ],
  },
  {
    name: "Hassan Hamdy",
    title: "Senior Product Designer @ VOIS",
    relation: "Same team at VOIS",
    date: "Jun 2026",
    photo: HassanPhoto,
    highlight: "One of those who make everyone's job easier.",
    quote: [
      "Ibrahim is one of those who make everyone's job easier. I had the chance to work closely with him during his time at VOIS, and honestly he is one of the most reliable software engineers I've worked with.",
      "What I really appreciate about him is that he doesn't only focus on writing code. He has a strong understanding of the business side, communicates clearly with everyone involved, and always makes sure he understands the bigger picture before jumping into implementation.",
      "As a designer, one thing that stood out to me was his attention to detail. He cares a lot about the final user experience and pays close attention to design requirements, which makes collaboration between design and development much smoother.",
      "On top of that, Ibrahim always seems to have the know-how to figure things out, no matter how challenging the task is. He's proactive, easy to work with, and always adds value to the team.",
      "I genuinely enjoyed working with him and would highly recommend him to any team.",
    ],
  },
  {
    name: "Medhat Fawzy",
    title: "Senior Software Engineer @ Vodafone · AI & Cloud",
    relation: "Same team at VOIS",
    date: "Jun 2026",
    photo: MedhatPhoto,
    highlight: "If you're looking for someone who delivers, Ibrahim is that person.",
    quote: [
      "I worked closely with Ibrahim during his time at VOIS, and it was a pleasure to work with someone of such high impact.",
      "Whether it was solving issues, delivering specific features to meet specific users' demands or improving the quality the codebase we maintain, Ibrahim brought a high level of focus, speed and execution. He had a sharp mind, a bias toward action, and the kind of ownership mentality that's genuinely rare. His straightforward communication style and ability to break down complex problems into manageable pieces made him an invaluable asset to our team.",
      "If you're looking for someone who delivers, Ibrahim is that person.",
    ],
  },
  {
    name: "Mohammad Taleb",
    title: "Senior Front-End Engineer · React, TypeScript & React Native",
    relation: "Same team at HerronTech",
    date: "Oct 2025",
    photo: MohammadPhoto,
    highlight: "The kind of teammate who elevates everyone around him.",
    quote: [
      "I had the pleasure of working alongside Ibrahim Gaber at HerronTech, where we both served as Front-End React JS developers. Ibrahim consistently impressed me with his deep understanding of React, modern JavaScript, and clean architectural patterns. He has a sharp eye for UI/UX details, writes maintainable, scalable code, and is always eager to adopt new tools or share helpful insights with the team.",
      "Beyond his technical skills, Ibrahim's collaborative spirit and calm, solution-focused attitude made him a joy to work with — the kind of teammate who elevates everyone around him. I'd highly recommend Ibrahim to any team looking for a dependable and talented React developer.",
    ],
  },
  {
    name: "Mohamed Gaber",
    title: "Lead Software Engineer · Java, GCP, Kubernetes & AI Agents",
    relation: "Mentor",
    date: "May 2023",
    photo: MohamedGaberPhoto,
    highlight: "His enthusiasm, quick learning, and design flair set him apart.",
    quote: [
      "I'm excited to endorse my junior web developer brother. His enthusiasm, quick learning, and design flair set him apart. With strong skills and work ethic, he'll undoubtedly excel in any team he joins.",
    ],
  },
  {
    name: "Amr Mohamed",
    title: "Full Stack Engineer",
    relation: "Same team",
    date: "Aug 2022",
    photo: AmrPhoto,
    highlight: "Can do whatever it takes to get the job done.",
    quote: [
      "I've been working with Ibrahim for one year and he is a very passionate, hard working person who can do whatever it takes to get the job done.",
    ],
  },
];

const LONG = 380; // characters before the quote collapses

function Testimonial({ t }) {
  const [open, setOpen] = useState(false);
  const long = t.quote.join(" ").length > LONG;

  return (
    <figure className="card testimonial reveal">
      <div className="testimonial__top">
        <FormatQuoteIcon className="testimonial__mark" />
        <time className="testimonial__date mono">{t.date}</time>
      </div>
      <p className="testimonial__highlight">{t.highlight}</p>
      <blockquote className={long && !open ? "is-clamped" : undefined}>
        {t.quote.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </blockquote>
      {long && (
        <button type="button" className="link-btn testimonial__more" onClick={() => setOpen((o) => !o)}>
          {open ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption>
        <img src={t.photo} alt="" loading="lazy" />
        <span>
          <strong>{t.name}</strong>
          <small>{t.title}</small>
          <small className="testimonial__relation">{t.relation}</small>
        </span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading index="07" eyebrow="Recommendations" title="What people say.">
          Kind words from engineers, designers and mentors I've worked with.
        </SectionHeading>
        <div className="testimonials">
          {testimonials.map((t) => (
            <Testimonial key={t.name} t={t} />
          ))}
        </div>
        <div className="testimonials__cta reveal">
          <a
            href={`${profile.socials.linkedin}details/recommendations/`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost btn--sm"
            data-umami-event="LinkedIn recommendations"
          >
            <LinkedInIcon fontSize="inherit" /> Read them on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
