const profile = {
  name: "Ibrahim Gaber",
  role: "Technical Lead & Full Stack Engineer",
  currently: { title: "Technical Lead", company: "Palm Outsourcing" },
  location: "Cairo, Egypt",
  email: "ibrahimseda322@gmail.com",
  phone: "(+20) 1099782953",
  whatsapp: "https://wa.me/201099782953",
  careerStart: new Date(2024, 5), // June 2024
  summary:
    "I build production web platforms end to end with Node.js, TypeScript, React and Next.js across AWS and Google Cloud. Today I lead the architecture of an AI-powered hiring platform built on multi-stage Claude agents, semantic search and event-driven workflows.",
  about: [
    "Experienced Full Stack Developer focused on producing impactful software. I enjoy owning the whole path from data model to interface: designing APIs, shaping clean and reusable UI, and keeping systems fast, observable and cheap to run.",
    "Most recently I've been the sole technical lead on an AI hiring platform, orchestrating Anthropic Claude agents for CV parsing, screening and candidate matching, and before that I worked on enterprise developer platforms at VOIS with Kubernetes, AWS and Backstage.",
  ],
  socials: {
    github: "https://github.com/IbrahimGaber322",
    linkedin: "https://www.linkedin.com/in/ibrahim-gaber-seda/",
    hackerrank: "https://www.hackerrank.com/profile/ibrahimseda322",
  },
};

export const experience = [
  {
    role: "Technical Lead",
    company: "Palm Outsourcing",
    location: "London, UK",
    from: "Jun 2026",
    to: "Present",
    summary:
      "Sole technical lead for an AI-powered hiring platform, owning architecture, deployment, production operations and reliability.",
    highlights: [
      "Designed and built the platform on Node.js, TypeScript and Express, orchestrating multi-stage Anthropic Claude agents for candidate intake, CV parsing, screening and matching at scale.",
      "Architected a semantic candidate–job matching engine with vector embeddings, vector search and cross-encoder reranking, cutting LLM costs through a retrieval cascade.",
      "Optimized inference costs with prompt caching and batch-processing APIs for bulk candidate evaluation.",
      "Built a CV processing pipeline combining text extraction, a vision-model fallback for image-based PDFs and validation heuristics.",
      "Developed recruiter and candidate apps with Next.js and React, shipped to Google Cloud Run through Cloud Build CI/CD.",
      "Built email and WhatsApp communication workflows with cron jobs, event-driven webhooks and idempotent scheduling, plus resilient Notion integrations with rate limiting and exponential backoff.",
      "Designed magic-link auth with RBAC for candidates, employers and admins, and real-time messaging with presence and unread indicators.",
      "Split a monolith into isolated services so long-running AI workflows no longer block user-facing operations.",
    ],
    tags: ["Claude Agent SDK", "Node.js", "TypeScript", "Next.js", "MongoDB", "Vector Search", "Cloud Run"],
  },
  {
    role: "Software Engineer",
    company: "VOIS",
    link: "https://www.vodafone.com/careers/professional-career-areas/shared-services",
    location: "Cairo, Egypt",
    from: "May 2025",
    to: "Jun 2026",
    summary:
      "Enterprise-grade web platforms and developer tooling in a cloud-native environment.",
    highlights: [
      "Developed and maintained enterprise web platforms with React and Node.js, building reusable UI components following Atomic Design.",
      "Built and maintained CI/CD pipelines with Azure DevOps and GitHub Actions, and owned pipeline debugging to reduce build failures and deployment friction.",
      "Integrated Datadog and DevLake to deliver end-to-end DORA metrics and engineering insights.",
      "Managed deployments on AWS and Kubernetes with kubectl, and optimized DynamoDB queries for performance and cost.",
      "Extended Backstage with custom plugins and components to improve developer experience.",
    ],
    tags: ["React", "Node.js", "AWS", "Kubernetes", "DynamoDB", "Backstage", "Datadog"],
  },
  {
    role: "Full Stack Engineer",
    company: "HerronTech",
    link: "https://www.herrontech.com/",
    location: "Boston, USA · Remote",
    from: "Jun 2024",
    to: "May 2025",
    summary:
      "Team-based product work across the full stack on Google Cloud and AWS.",
    highlights: [
      "Delivered responsive production web apps end to end with React, Node.js and MongoDB.",
      "Built user-friendly interfaces following Atomic Design, in JavaScript and TypeScript.",
      "Shipped well-documented code with comprehensive unit tests inside Agile teams.",
    ],
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "GCP", "AWS"],
  },
];

export const education = [
  {
    title: "Diploma, Open Source Application Development",
    org: "Information Technology Institute (ITI)",
    link: "https://iti.gov.eg/home",
    from: "2023",
    to: "2024",
  },
  {
    title: "Complete Web Development Program",
    org: "The App Brewery",
    from: "2022",
    to: "2023",
  },
  {
    title: "Bachelor of Engineering",
    org: "Ain Shams University",
    link: "https://eng.asu.edu.eg/",
    from: "2017",
    to: "2022",
  },
];

export default profile;
