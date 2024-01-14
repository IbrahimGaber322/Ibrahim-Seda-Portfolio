import WebWeave from "../images/WebWeave gif.gif";
import bitnine from "../images/bitnine.jpg";
/* import alam from "../images/3alam.gif"; */
import reiz from "../images/reiz.gif";
import Threads from "../images/Threads.gif";
import Tasks from "../images/Tasks.gif";
import JavaScript from "../images/javascript.gif";
import Knot from "../images/knot.gif";
import Instatus from "../images/instatus.gif";
import Technoboly from "../images/Technoboly.gif";
const projects = [
  {
    name: "WebWeave",
    imgSrc: WebWeave,
    keyFeatures: [
      "Simple and User-Friendly Interface",
      "Post Creation and Interaction",
      "Profile Customization",
      "Edit Your Posts",
      "Complete Account Features",
      "Expand Your Network",
      "Real-time Friend Request Notifications",
    ],
    description:
      "Join WebWeave today and explore the possibilities of meaningful online connections.",
    visitLink: "https://webweave.onrender.com/",
    category: ["Reactjs + Nodejs"],
  },
  {
    name: "Bitnine",
    imgSrc: bitnine,
    keyFeatures: [
      "Developed bilingual single-page website with captivating animations using React.",
      "Created RESTful API server with Express and PostgreSQL, including user authentication.",
      "Utilized essential packages for security and hosted PostgreSQL on Render.com.",
      "Conducted comprehensive testing for reliable functionality.",
    ],
    description:
      "Visit Bitnine and explore the captivating animations and functionality of this website.",
    visitLink: "https://bitnine.onrender.com/",
    category: ["Reactjs + Nodejs"],
  },
  /*  {
    name: "3alam",
    imgSrc: alam,
    keyFeatures: [
      "Developed a unique and attractive company website using Next.js, React, and TypeScript.",
      "Utilized server-side rendering for performance and SEO benefits.",
      "Incorporated smooth animations and interactive elements for an enhanced user experience.",
      "Implemented Material-UI icons and components for a consistent UI design.",
    ],
    description:
      "Explore the attractive design and interactive elements of the 3alam company website.",
    visitLink: "https://next-3r88-6pva73934-ibrahimgaber322.vercel.app/",
    category: ["NextJs"],
  }, */
  {
    name: "Countries",
    imgSrc: reiz,
    keyFeatures: [
      "Created a React web app for sorting countries by size, continent, and alphabetical order.",
      "Utilized Material-UI and Emotion CSS-in-JS for a responsive UI.",
      "Integrated restcountries.com API to fetch country data.",
    ],
    description:
      "Explore the features and sorting functionality of the Countries web app.",
    visitLink: "https://countries-ghr6.onrender.com/",
    category: ["Reactjs"],
  },
  {
    name: "Threads",
    imgSrc: Threads,
    keyFeatures: [
      "Developed and launched a Twitter clone called Threads using Next.js with TypeScript, Shadcn, Tailwind CSS, Clerk for user authentication, webhooks, and FileUploadThing for image uploads.",
      "Created a user-friendly interface with responsive design to mimic Twitter's functionality.",
      "Integrated Clerk for secure user authentication and real-time updates via webhooks.",
      "Implemented image upload feature using FileUploadThing.",
      "Utilized modern tech stack including Next.js, TypeScript, Shadcn, Tailwind CSS, and webhooks.",
      "Deployed the project on Vercel for seamless user experience.",
    ],
    description: "Visit this amazing website now and check its many features!",
    visitLink: "https://threads-eight-ivory.vercel.app/",
    category: ["NextJs"],
  },
  {
    name: "Tasks",
    imgSrc: Tasks,
    keyFeatures: [
      "Developed a comprehensive Task Manager Application that includes both frontend and backend components.",
      "Frontend: Built using React.js and TypeScript, styled with Material-UI.",
      "Backend: Utilized Node.js, Express.js, and MongoDB for seamless data management.",
      "Incorporated features such as task creation, completion, deletion, editing, filtering, and sorting.",
      "Implemented user authentication, task sharing, comments, and data validation for security.",
      "Demonstrated proficiency in full-stack development, modern tech stacks, and integration practices.",
    ],
    description: "Visit now and manage your tasks!",
    visitLink: "https://tasks-kabg.onrender.com/",
    category: ["Reactjs + Nodejs"],
  },
  {
    name: "JavaScript Functions",
    imgSrc: JavaScript,
    keyFeatures: [
      "Explore age calculation, even/odd guessing, discount calculation, and more.",
      "Frontend: Built using React.js and styled with Material-UI.",
      "Navigate easily and interact intuitively.",
      "Encapsulate each function for code reusability and maintenance.",
    ],
    visitLink: "https://iti-javascript.vercel.app/",
    description: "Visit now and try different JavaScript functions!",
    category: ["Reactjs"],
  },
  {
    name: "KNOT (Link Manager)",
    imgSrc: Knot,
    keyFeatures: [
      "Developed a comprehensive Link Manager Application that includes both frontend and backend components.",
      "Frontend: Built using React.js and TypeScript, styled with Material-UI.",
      "Backend: Utilized NestJs and MongoDB for seamless data management.",
      "Seamless CRUD functionality for created links.",
      "Implemented user authentication using Passport for best security.",
      "Demonstrated proficiency in full-stack development, modern tech stacks, and integration practices.",
    ],
    visitLink: "https://knot-client.vercel.app/",
    description: "Visit now and create your own links!",
    category: ["Reactjs + NestJs"],
  },
  {
    name: "Instatus",
    imgSrc: Instatus,
    keyFeatures: [
      "Developed using NextJs and TypeScript.",
      "Used TailWind Css for styling.",
      "Made my custom components and used clone code for reusability.",
      "Used NextJs API functionality to accept and send requests.",
      "Used Prisma ORM with PostgreSQL for advanced data managment.",
      "Data manipulation functionality and ability to export to Excel.",
    ],
    visitLink: "https://instatus-rosy.vercel.app/",
    description: "Visit now and check this amazing tool !",
    category: ["NextJs"],
  },
  {
    name: "Technoboly",
    imgSrc: Technoboly,
    keyFeatures: [
      "E-commerce functionality with Elementor and WooCommerce.",
      "Google Maps integration.",
      "Dual-language support.",
      "Wide variety of acrylic & polycarbonate products.",
      "Frequently visited.",
    ],
    description:
      "Explore our e-commerce website with a wide range of products.",
    visitLink: "https://technoboly.com/",
    category: ["WordPress"],
  },
];

export default projects;
