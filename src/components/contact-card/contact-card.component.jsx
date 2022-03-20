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
  TextAreaInput,
} from "./contact-card.styles";
import emailjs from "emailjs-com";
import { useRef } from "react";

import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const iconStyles = {
  strokeWidth: 1.5,
  strokeOpacity: 0.51,
};

const ContactCard = () => {
  const contact = useRef();
  let templateParams = {
    from_name: contact.current[0].value,
    from_email: contact.current[1].value,
    subject: contact.current[2].value,
    message: contact.current[3].value,
  };

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send("portfolioform", "template_contact", templateParams, "RqmwKpIqKFAs96gv0").then(
      (result) => console.log(result.text),
      (error) => console.log(error)
    );
  }

  return (
    <Card>
      <div>
        <StyledHeadingSecondary
          topColor={"rgba(0, 0, 0, .31)"}
          headingText={"Send Me A \n Message!"}
        />
        <Mail href="mailto:hello@mauricekoreman.nl" taget="_blank">
          hello@mauricekoreman.nl
        </Mail>
        <SocialsContainer>
          <p>Find me</p>

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
      </div>
      <Form ref={contact} onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Name</Label>
          <TextInput required type="text" name="contact_name" placeholder="Your name" />
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
          <TextAreaInput required as="textarea" type="text" placeholder="Tell me.. :D" />
        </InputContainer>

        <InputContainer>
          <StyledButton isOutlined type="submit">
            Send it!
          </StyledButton>
        </InputContainer>
      </Form>
    </Card>
  );
};

export default ContactCard;
