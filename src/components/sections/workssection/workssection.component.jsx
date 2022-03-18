import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  ProjectsContainer,
  WorkssectionContainer,
  StyledHeadingSecondary,
  Background,
} from "./workssection.styles";

import project1 from "../../../assets/img/website_placeholder1.webp";
import project2 from "../../../assets/img/website_placeholder2.webp";

import ProjectCard from "../../projectcard/projectcard.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

const Workssection = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/projects");
  };

  return (
    <WorkssectionContainer id="works">
      <Background>
        <StyledHeadingSecondary headingText={"Some Things That I've Built"} />
        <ProjectsContainer>
          <ProjectCard alignment backgroundImage={project1} />
          <ProjectCard alignment={false} backgroundImage={project2} />
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
