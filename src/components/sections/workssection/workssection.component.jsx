import {
  ButtonContainer,
  TitleContainer,
  ProjectsContainer,
  WorkssectionContainer,
} from "./workssection.styles";

import HeadingSecondary from "../../typography/heading-secondary/heading-secondary.component";

import project1 from "../../../assets/img/website_placeholder1.webp";
import project2 from "../../../assets/img/website_placeholder2.webp";
import project3 from "../../../assets/img/website_placeholder3.webp";

import ProjectCard from "../../projectcard/projectcard.component";
import CustomButton from "../../buttons/custom-button/custom-button.component";

const Workssection = () => (
  <WorkssectionContainer id="works">
    <TitleContainer>
      <HeadingSecondary topText={"Works"} headingText={"Some Things That \n I've Built"} />
    </TitleContainer>
    <ProjectsContainer>
      <ProjectCard alignment backgroundImage={project1} />
      <ProjectCard alignment={false} backgroundImage={project2} />
      <ProjectCard alignment backgroundImage={project3} />
      <ButtonContainer>
        <CustomButton goldenStyles>See all projects</CustomButton>
      </ButtonContainer>
    </ProjectsContainer>
  </WorkssectionContainer>
);

export default Workssection;
