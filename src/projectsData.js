import project1 from "./assets/img/website_placeholder1.webp";
import project2 from "./assets/img/website_placeholder2.webp";
import project3 from "./assets/img/website_placeholder3.webp";

export const projectInfo = [
  {
    projectTitle: "Portfolio Website",
    img: project1,
    projectDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue erat, pulvinar nec egestas non, egestas quis velit. Sed non metus sit amet elit semper vehicula et vitae diam. Praesent id neque at urna gravida elementum. Duis ac elit ultrices, maximus mauris id, faucibus sem. In aliquet sapien eu metus iaculis tristique. Nunc vulputate leo eros, sit amet iaculis justo luctus nec. Nulla et hendrerit mauris. Vestibulum et dolor velit. Ut tincidunt non velit a suscipit. Maecenas finibus nunc leo, eu egestas neque mollis in.",
  },
  {
    projectTitle: "OneTwoModel",
    img: project2,
    projectDesc: "OneTwoModel stage!",
  },
  {
    projectTitle: "CSTM website",
    img: project3,
    projectDesc: "I liked the CSTM website!",
  },
  {
    projectTitle: "Balkan",
    img: project1,
    projectDesc: "I have honestly no clue",
  },
];

export function getProject(projectTitle) {
  return projectInfo.find((project) => project.projectTitle === projectTitle);
}
