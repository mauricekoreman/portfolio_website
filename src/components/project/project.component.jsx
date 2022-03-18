import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NotFoundPage from "../../pages/notFoundPage/not-fount-page.component";
import { getProject } from "../../projectsData";
import Footersection from "../sections/footersection/footersection.component";
import HeadingSecondary from "../typography/heading-secondary/heading-secondary.component";
import { Paragraph } from "../typography/paragraph/paragraph.styles";
import {
  HeadingContainer,
  OuterContainer,
  ProjectContainer,
  ProjectImg,
  StyledArrow,
} from "./project.styles";

const Project = () => {
  const navigate = useNavigate();
  let params = useParams();
  let project = getProject(params.project);

  return project ? (
    <>
      <OuterContainer>
        <ProjectContainer>
          <HeadingSecondary headingText={project.projectTitle} />
          <ProjectImg src={project.img} />
          <Paragraph>{project.projectDesc}</Paragraph>
        </ProjectContainer>
      </OuterContainer>
      <Footersection />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default Project;
