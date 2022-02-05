import {
  Card,
  Form,
  InputContainer,
  Label,
  Mail,
  SocialsContainer,
  StyledHeadingSecondary,
  TextInput,
  StyledButton,
} from "./contact-card.styles";

import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const ContactCard = () => (
  <Card>
    <div>
      <StyledHeadingSecondary
        topColor={"rgba(0, 0, 0, .31)"}
        topText={"Contact"}
        headingText={"Send Me A \n Message!"}
      />
      <Mail href="#">gkoreman.m@gmail.com</Mail>
      <SocialsContainer>
        <p>Find me</p>
        <FiInstagram />
        <FiLinkedin />
        <FiGithub />
      </SocialsContainer>
    </div>
    <Form>
      <InputContainer>
        <Label>Name</Label>
        <TextInput required type="text" placeholder="Your name" />
      </InputContainer>

      <InputContainer>
        <Label>Email</Label>
        <TextInput required type="email" placeholder="your@email.com" />
      </InputContainer>

      <InputContainer>
        <Label>Subject</Label>
        <TextInput type="text" placeholder="What's the topic?" />
      </InputContainer>

      <InputContainer>
        <Label>Your message</Label>
        <TextInput required as="textarea" type="text" placeholder="Tell me.. :D" />
      </InputContainer>

      <InputContainer>
        <StyledButton isOutlined type="submit">
          Send it!
        </StyledButton>
      </InputContainer>
    </Form>
  </Card>
);

export default ContactCard;
