import CSTM from "./assets/img/CSTM_project.jpg";
import OTM from "./assets/img/OneTwoModel_project.jpg";
import portfolio from "./assets/img/Portfolio_project.jpg";

export const projectInfo = [
  {
    projectTitle: "CSTM Website",
    img: CSTM,
    shortDesc: "The website of CSTM, a webdevelopment company that I co-founded with two friends.",
    longDesc:
      "CSTM (Pronounced 'custom') is a young company that was founded by me and two friends. It's mission is to provide CSTM-made web and app development for an affordable price. Our first project was ofcourse our own website. We designed it from scratch and built it with React.",
    technologies: ["React", "Sass", "Framer Motion"],
    website: "https://cstm-development.nl/",
  },
  {
    projectTitle: "OneTwoModel Application",
    img: OTM,
    shortDesc:
      "A React Native application which functions as a modeling platform which helps you collect all the data model agencies need and sends it to all your prefered agencies at once.",
    longDesc:
      "OneTwoModel is a startup based in Leiden which provides a service to help you fulfill your dream of becoming a model. They discovered that the process of even applying to modeling agencies is a lot of work and very repetitive. They came up with the idea of their OneTwoModel app and that's where I come in.\nDuring a time period of 20 weeks, I have worked to design and develop the application. I designed the user interface and created prototypes in Adobe XD. I built the app in React Native with Expo so that it would work on both Android and IOS with only one codebase. During the development phase I have conducted interviews and user tests to research the user experience. The database was created with Firestore, a NoSQL database service from Firebase.",
    technologies: ["React Native", "Expo", "Firestore"],
    website: "https://onetwomodel.com/",
  },
  {
    projectTitle: "Portfolio Website",
    img: portfolio,
    shortDesc: "The portfolio website you're on right now!",
    longDesc: "The portfolio website you're on right now!",
    technologies: ["React", "Styled Components"],
    website: "https://mauricekoreman.nl",
  },
];

export function getProject(projectTitle) {
  return projectInfo.find((project) => project.projectTitle === projectTitle);
}
