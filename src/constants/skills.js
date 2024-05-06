const skillsGroups = [
  {
    title: "Programming Languages",
    skills: [
      "BashScript",
      "C",
      "C++",
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "PHP",
      "Ruby",
    ],
  },
  {
    title: "FrontEnd Technologies",
    skills: [
      "HTML",
      "CSS",
      "React",
      "NextJs",
      "Angular",
      "Vue",
      "Bootstrap",
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
      "Django",
      "Ruby on Rails",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Other Technologies",
    skills: ["Git & Github", "Docker", "Linux"],
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
