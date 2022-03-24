import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CV from "../../../assets/CV_mauricekoreman.pdf";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import {
  Footer,
  FooterBottom,
  FooterContainer,
  FooterFlex,
  FooterNavList,
  Mail,
  SocialsContainer,
} from "./footersection.styles";

const iconStyles = {
  strokeWidth: 1,
  size: 25,
};

const Footersection = () => {
  const { pathname } = useLocation();
  const [home, setHome] = useState(true);

  useEffect(() => {
    pathname == "/" ? setHome(true) : setHome(false);
  }, [pathname]);

  return (
    <Footer>
      <FooterContainer>
        <FooterFlex>
          <Mail href="mailto:hello@mauricekoreman.nl" taget="_blank">
            hello@mauricekoreman.nl
          </Mail>
          <nav>
            {home ? (
              <FooterNavList>
                <li>
                  <a href={CV} target={"_blank"}>
                    My Resume
                  </a>
                </li>
                <li>
                  <Link to="/projects">My Projects</Link>
                </li>
              </FooterNavList>
            ) : (
              <FooterNavList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href={CV} target={"_blank"}>
                    My Resume
                  </a>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </FooterNavList>
            )}
          </nav>
        </FooterFlex>
        <FooterBottom>
          <p>© Maurice Koreman 2022</p>
          <SocialsContainer>
            <a href="https://www.instagram.com/mauricekoreman/" target="_blank">
              <FiInstagram {...iconStyles} />
            </a>
            <a href="https://www.linkedin.com/in/mauricekoreman/" target="_blank">
              <FiLinkedin {...iconStyles} />
            </a>
            <a href="https://github.com/mauricekoreman" target="_blank">
              <FiGithub {...iconStyles} />
            </a>
          </SocialsContainer>
        </FooterBottom>
      </FooterContainer>
    </Footer>
  );
};

export default Footersection;
