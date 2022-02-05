import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import {
  Footer,
  FooterBottom,
  FooterContainer,
  FooterNav,
  Mail,
  SocialsContainer,
} from "./footersection.styles";

const Footersection = () => (
  <Footer>
    <FooterContainer>
      <div>
        <Mail href="#">gkoreman.m@gmail.com</Mail>
        <nav>
          <FooterNav>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </FooterNav>
        </nav>
      </div>
      <FooterBottom>
        <p>© Maurice Koreman 2022</p>
        <SocialsContainer>
          <FiInstagram />
          <FiLinkedin />
          <FiGithub />
        </SocialsContainer>
      </FooterBottom>
    </FooterContainer>
  </Footer>
);

export default Footersection;
