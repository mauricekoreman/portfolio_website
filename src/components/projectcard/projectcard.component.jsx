import {
  AccentTitle,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectItem,
  ProjectTitle,
  SkillItem,
  SkillList,
} from "./projectcard.styles";

const ProjectCard = ({ backgroundImage, alignment }) => (
  <ProjectItem className="projectItem">
    <ProjectImage alignment={alignment} backgroundImage={backgroundImage}></ProjectImage>
    <ProjectContent alignment={alignment} className="projectContent">
      <AccentTitle>Featured project</AccentTitle>
      <ProjectTitle>Bakal website</ProjectTitle>
      <ProjectDescription alignment={alignment}>
        With the use of React and MongoDB I've built a responsive website for Bakal. It is now
        widely used by all of their clients. Here I was the sole developer.
      </ProjectDescription>
      <SkillList>
        <SkillItem>React</SkillItem>
        <SkillItem>Styled components</SkillItem>
        <SkillItem>MonogoDB</SkillItem>
      </SkillList>
    </ProjectContent>
  </ProjectItem>

  // <li className="container" style={{ display: "flex" }}>
  //   <div className="image"></div>
  //   <article className="projectText">
  //     <h3 className="projectTitle">Project</h3>
  //     <p className="projectDescription">
  //       lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
  //       lorem lorem lorem lorem lorem
  //     </p>
  //     <ul style={{ display: "flex" }}>
  //       <li>technology</li>
  //       <li>technology</li>
  //       <li>technology</li>
  //     </ul>
  //   </article>
  // </li>
);

export default ProjectCard;
