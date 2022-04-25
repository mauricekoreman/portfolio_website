import CSTM from "./assets/img/CSTM_project.jpg";
import OTM from "./assets/img/OneTwoModel_project.jpg";
import portfolio from "./assets/img/Portfolio_project.jpg";
import postnl from "./assets/img/PostNL_project.jpg";
import athalos from "./assets/img/athalos_project.jpg";

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
  {
    projectTitle: "PostNL Machine Learning Explainability",
    img: postnl,
    shortDesc:
      "A project with PostNL where we had to give better insights in how their package checking machine learning algorithm made it's decisions.",
    longDesc:
      "During my second phase of the minor 'Data Science For Business Improvement' I did at the Hague Univerisy of Applied Sciences, my group had the opportunity to work together with PostNL. The project was about giving a better insight in how their machine learning algorithm made it's decisions. Based on what factors. We decided to use the library 'LIME'. This is a library that helps us explain what machine learning classifiers are doing by showing us what variables have an impact on the decision and what the importance is of the variable. The dataframes and algorithm of PostNL was built with the H2O module.",
    technologies: ["Python", "H2O", "LIME", "pandas", "Jupyter Notebooks"],
    website: "",
  },
  {
    projectTitle: "Athalos PWA",
    img: athalos,
    shortDesc:
      "With the CSTM team we have worked on developing service portal PWA for Athalos, a global communication service provider.",
    longDesc:
      "The business, CSTM, that I own got hired to develop a progressive web application (PWA) for the company Athalos, a global communication service provider located in The Netherlands. We created an application which functions as a portal where customers can login to see and manage the services they have at the Athalos company. The designs and front-end implementation is completely designed and built by the CSTM team.",
    technologies: ["React", "Node/Express", "PWA"],
    website: "https://www.athalos.com/",
  },
];

export function getProject(projectTitle) {
  return projectInfo.find((project) => project.projectTitle === projectTitle);
}
