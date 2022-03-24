import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ProjectsContainer,
  WorkssectionContainer,
  StyledHeadingSecondary,
  Background,
} from "./workssection.styles";

import ProjectCard from "../../projectcard/projectcard.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

import { projectInfo } from "../../../projectsData";

const Workssection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <WorkssectionContainer id="works">
      <Background>
        <StyledHeadingSecondary headingText={"Some Things That I've Built"} />
        <ProjectsContainer>
          {projectInfo.slice(0, 2).map((e, i) => (
            <ProjectCard
              key={i}
              onClick={() => navigate(`/projects/${e.projectTitle}`)}
              alignment={i % 2 ? false : true}
              project={e}
            />
          ))}
        </ProjectsContainer>
      </Background>
      <ButtonContainer>
        <CustomButton onClick={handleClick} goldenStyles>
          See all projects
        </CustomButton>
      </ButtonContainer>
    </WorkssectionContainer>
  );
};

export default Workssection;
