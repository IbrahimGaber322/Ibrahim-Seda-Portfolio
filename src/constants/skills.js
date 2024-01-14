const skillsGroups = [
  {
    title: "Programming Languages",
    skills: ["BashScript", "C", "C++", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "FrontEnd Technologies",
    skills: [
      "HTML",
      "CSS",
      "JQuery",
      "Bootstrap",
      "ReactJs",
      "NextJs",
      "Redux",
      "Material-U",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    title: "BackEnd Technologies",
    skills: [
      "NodeJs",
      "ExpressJs",
      "NestJs",
      "NextJs",
      "NextJs",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Other Technologies",
    skills: ["Git", "Docker", "Socket.IO", "Webhooks", "WordPress"],
  },
];

export default skillsGroups;

const colors = [
  "success",
  "primary",
  "secondary",
  "danger",
  "warning",
  "dark",
  "light",
  "info",
];

export const getColors = (i) => {
  const n = Number(i);
  if (isNaN(n)) return colors[0];
  if (n < 0) return colors[0];
  if (n < colors.length) return colors[n];
  else return getColors(n - colors.length);
};
