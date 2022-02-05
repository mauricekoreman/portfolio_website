import {
  AccentTitle,
  Filter,
  ImageContainer,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectItem,
  ProjectTitle,
  SkillItem,
  SkillList,
} from "./projectcard.styles";

const ProjectCard = ({ backgroundImage }) => (
  <ProjectItem className="projectItem">
    <ImageContainer className="imageContainer">
      <ProjectImage backgroundImage={backgroundImage}></ProjectImage>
      <Filter />
    </ImageContainer>
    <ProjectContent className="projectContent">
      <AccentTitle>Featured project</AccentTitle>
      <ProjectTitle>Bakal website</ProjectTitle>
      <div>
        <ProjectDescription>
          With the use of React and MongoDB I've built a responsive website for Bakal. It is now
          widely used by all of their clients. Here I was the sole developer.
        </ProjectDescription>
      </div>
      <SkillList>
        <SkillItem>React</SkillItem>
        <SkillItem>Styled components</SkillItem>
        <SkillItem>MonogoDB</SkillItem>
      </SkillList>
    </ProjectContent>
  </ProjectItem>
);

export default ProjectCard;
