import WebWeave from "../images/WebWeave.webp";
import Threads from "../images/Threads.webp";
import Tasks from "../images/Tasks.gif";
import Knot from "../images/knot.gif";
import Instatus from "../images/instatus.gif";
import Bazaar from "../images/Bazaar.gif";
import GoodReads from "../images/GoodReads.gif";

const projects = [
  {
    name: "Bazaar",
    kind: "E-commerce",
    imgSrc: Bazaar,
    description:
      "A full e-commerce store with product search, filtering and pagination, Stripe checkout and access/refresh-token authentication.",
    keyFeatures: [
      "Search, filtering and pagination tuned for a fast shopping flow",
      "Secure Stripe checkout",
      "Access + refresh token authentication",
    ],
    stack: ["React", "TypeScript", "Django", "MySQL", "Stripe"],
    visitLink: "https://bazaar-ydo9.onrender.com/",
    repos: [
      { label: "Frontend", url: "https://github.com/IbrahimGaber322/ecommerce-client" },
      { label: "Backend", url: "https://github.com/IbrahimGaber322/ecommerce-server" },
    ],
    category: "React + Django",
  },
  {
    name: "Threads",
    kind: "Social platform",
    imgSrc: Threads,
    description:
      "A Twitter clone with secure authentication, image uploads and a responsive interface, deployed on Vercel.",
    keyFeatures: [
      "Clerk authentication with real-time updates via webhooks",
      "Image uploads with UploadThing",
      "Responsive UI with shadcn/ui and Tailwind CSS",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Clerk"],
    visitLink: "https://threads-eight-ivory.vercel.app/",
    repos: [{ label: "Code", url: "https://github.com/IbrahimGaber322/threads" }],
    category: "Next.js",
  },
  {
    name: "WebWeave",
    kind: "Social network",
    imgSrc: WebWeave,
    description:
      "A MERN social network with posts, profiles, friend requests and real-time notifications.",
    keyFeatures: [
      "Post creation, editing and interactions",
      "Profile customization and networking",
      "Real-time friend request notifications",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    visitLink: "https://webweave.onrender.com/",
    repos: [{ label: "Code", url: "https://github.com/IbrahimGaber322/WebWeave" }],
    category: "React + Node.js",
  },
  {
    name: "Good Reads",
    kind: "Bookstore",
    imgSrc: GoodReads,
    description:
      "A bookstore with personalized shelves and an admin panel for managing books, categories and authors.",
    keyFeatures: [
      "Admin panel for books, categories and authors",
      "Personal shelves with reading status",
      "Cloudinary image hosting and JWT auth",
    ],
    stack: ["Angular", "Node.js", "Express", "MongoDB", "Cloudinary"],
    visitLink: "https://good-reads-client-one.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/IbrahimGaber322/good_reads_client" },
      { label: "Backend", url: "https://github.com/IbrahimGaber322/my_good_reads_server" },
    ],
    category: "Angular + Node.js",
  },
  {
    name: "KNOT",
    kind: "Link manager",
    imgSrc: Knot,
    description:
      "A link manager with full CRUD for saved links and Passport-based authentication.",
    keyFeatures: [
      "CRUD for links",
      "Passport authentication",
      "Typed React frontend with Material UI",
    ],
    stack: ["React", "TypeScript", "NestJS", "MongoDB", "Passport"],
    visitLink: "https://knot-client.vercel.app/",
    category: "React + NestJS",
  },
  {
    name: "Instatus",
    kind: "Admin tool",
    imgSrc: Instatus,
    description:
      "A data management tool with custom reusable components, data manipulation and Excel export, built on Next.js API routes.",
    keyFeatures: [
      "Next.js API routes",
      "Prisma ORM on PostgreSQL",
      "Export data to Excel",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    visitLink: "https://instatus-rosy.vercel.app/",
    category: "Next.js",
  },
  {
    name: "Tasks",
    kind: "Productivity",
    imgSrc: Tasks,
    description:
      "A task manager with sharing, comments, filtering and sorting, backed by a Node.js API.",
    keyFeatures: [
      "Create, edit, complete, filter and sort tasks",
      "Task sharing and comments",
      "Authentication and data validation",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    visitLink: "https://tasks-kabg.onrender.com/",
    category: "React + Node.js",
  },
];

export default projects;
