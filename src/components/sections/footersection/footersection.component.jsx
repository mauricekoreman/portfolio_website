import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
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

const Footersection = () => (
  <Footer>
    <FooterContainer>
      <FooterFlex>
        <Mail href="mailto:gkoreman.m@gmail.com" taget="_blank">
          gkoreman.m@gmail.com
        </Mail>
        <nav>
          <FooterNavList>
            <li>
              <HashLink smooth to="#">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#works">
                Works
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                Contact
              </HashLink>
            </li>
          </FooterNavList>
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

export default Footersection;
