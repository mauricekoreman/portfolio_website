import { useLocation, useNavigate } from "react-router-dom";
import Footersection from "../../components/sections/footersection/footersection.component";
import HeadingPrimary from "../../components/typography/heading-primary/heading-primary.component";
import {
  Project,
  ProjectImage,
  ProjectsContainer,
  ProjectsPage,
  ProjectTitle,
} from "./AllProjectsPage.styles";

import { projectInfo } from "../../projectsData";

const AllProjectsPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (project) => {
    navigate(`${pathname}/${project}`);
  };

  return (
    <ProjectsPage>
      <HeadingPrimary headingText={"My Projects"} />
      <ProjectsContainer>
        {projectInfo.map((e, i) => (
          <Project key={i} onClick={() => handleClick(e.projectTitle)}>
            <ProjectImage img={e.img}>
              <ProjectTitle>{e.projectTitle}</ProjectTitle>
            </ProjectImage>
          </Project>
        ))}
      </ProjectsContainer>
      <Footersection />
    </ProjectsPage>
  );
};
export default AllProjectsPage;
