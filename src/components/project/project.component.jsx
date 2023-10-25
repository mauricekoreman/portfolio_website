import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NotFoundPage from "../../pages/notFoundPage/not-fount-page.component";
import { getProject } from "../../projectsData";
import { SkillList } from "../projectcard/projectcard.styles";
import ScrollToTop from "../scrollToTop/scrollToTop.component";
import Footersection from "../sections/footersection/footersection.component";
import HeadingSecondary from "../typography/heading-secondary/heading-secondary.component";
import { Paragraph } from "../typography/paragraph/paragraph.styles";
import {
  CustomSkillItem,
  HeadingContainer,
  OuterContainer,
  ProjectContainer,
  ProjectImg,
  ProjectWebsite,
  StyledArrow,
} from "./project.styles";

const Project = () => {
  const navigate = useNavigate();
  let params = useParams();
  let project = getProject(params.project);

  const paragraphArr = project.longDesc.split("\n");

  return project ? (
    <>
      <OuterContainer>
        <ScrollToTop />
        <ProjectContainer>
          <HeadingContainer>
            <StyledArrow onClick={() => navigate(-1)} />
            <HeadingSecondary headingText={project.projectTitle} />
          </HeadingContainer>
          <ProjectImg src={project.img} />
          <ProjectWebsite href={project.website} target='_blank' rel='noreferrer'>
            {project.website}
          </ProjectWebsite>
          <SkillList>
            {project.technologies.map((e, i) => (
              <CustomSkillItem key={i}>{e}</CustomSkillItem>
            ))}
          </SkillList>
          <div>
            {paragraphArr.map((e, i) => (
              <React.Fragment key={i}>
                <Paragraph>{e}</Paragraph>
                <br />
              </React.Fragment>
            ))}
          </div>
        </ProjectContainer>
      </OuterContainer>
      <Footersection />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default Project;

