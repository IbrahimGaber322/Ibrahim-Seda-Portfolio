import WebWeave from "../images/WebWeave gif.gif";
import Threads from "../images/Threads.gif";
import Tasks from "../images/Tasks.gif";
import Knot from "../images/knot.gif";
import Instatus from "../images/instatus.gif";
import Bazaar from "../images/Bazaar.gif";
import GoodReads from "../images/GoodReads.gif";
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
    category: "React + Nodejs",
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
    category: "NextJs",
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
    category: "React + Nodejs",
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
    category: "React + NestJs",
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
    category: "NextJs",
  },
  {
    name: "Bazaar",
    imgSrc: Bazaar,
    keyFeatures: [
      "Robust product search, filtering, and pagination for an optimized shopping experience.",
      "Secure and smooth checkout process integrated with Stripe.",
      "Advanced user authentication using access tokens and refresh tokens.",
      "Dynamic frontend built with React TypeScript and styled using Material-UI.",
    ],
    description:
      "Explore the seamless and secure shopping experience at Bazaar, where efficiency meets modern e-commerce design. Tailored for user convenience, this platform offers a robust search system and secure payment options.",
    visitLink: "https://bazaar-ydo9.onrender.com/",
    category: "React + Django",
  },
  {
    name: "GoodReads",
    imgSrc: GoodReads,
    keyFeatures: [
      "Comprehensive admin panel for managing books, categories, and authors.",
      "Personalized bookshelves for users to manage their reading status.",
      "Secure cloud-based image hosting with Cloudinary.",
      "User authentication secured by JWT for a protected browsing experience.",
    ],
    description:
      " Dive into the vast collection at Good Reads. Manage your reading journey through a user-friendly interface designed to enrich your reading experience with reviews, personalized shelves, and secure browsing.",
    visitLink: "https://good-reads-client-one.vercel.app/",
    category: "Angular + NodeJs",
  },
];

export default projects;
