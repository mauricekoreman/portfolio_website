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

const ProjectCard = ({
  project: { projectTitle, img, shortDesc, technologies },
  alignment,
  onClick,
}) => (
  <ProjectItem className="projectItem">
    <ProjectImage onClick={onClick} alignment={alignment} backgroundImage={img}></ProjectImage>
    <ProjectContent alignment={alignment} className="projectContent">
      <AccentTitle>FEATURED PROJECT</AccentTitle>
      <ProjectTitle alignment={alignment}>{projectTitle}</ProjectTitle>
      <ProjectDescription alignment={alignment}>{shortDesc}</ProjectDescription>
      <SkillList>
        {technologies.map((e, i) => (
          <SkillItem key={i}>{e}</SkillItem>
        ))}
      </SkillList>
    </ProjectContent>
  </ProjectItem>
);

export default ProjectCard;
