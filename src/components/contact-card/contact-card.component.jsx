import { useState } from "react";
import emailjs from "emailjs-com";
import { AnimatePresence } from "framer-motion";
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

import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import Spinner from "../spinner/spinner.component";

const iconStyles = {
  strokeWidth: 1.5,
  strokeOpacity: 0.51,
};

const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  let templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    emailjs.send("portfolioform", "template_contact", templateParams, "RqmwKpIqKFAs96gv0").then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setErrMsg("Something went wrong...");
        setLoading(false);
      }
    );

    setSuccess(false);
    setLoading(true);
    setErrMsg("");
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
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Name</Label>
          <TextInput
            required
            type="text"
            name="contact_name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </InputContainer>

        <InputContainer>
          <Label>Email</Label>
          <TextInput
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </InputContainer>

        <InputContainer>
          <Label>Subject</Label>
          <TextInput
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's the topic?"
          />
        </InputContainer>

        <InputContainer>
          <Label>Your message</Label>
          <TextAreaInput
            required
            as="textarea"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me.. :D"
          />
        </InputContainer>

        <InputContainer>
          <StyledButton isOutlined type="submit">
            Send it!
          </StyledButton>
        </InputContainer>
        <AnimatePresence>
          {loading && (
            <Spinner height={"3rem"} width={"3rem"} borderWidth={"3px"} success={success} />
          )}
        </AnimatePresence>
        {errMsg && <p className="error__message">{errMsg}</p>}
      </Form>
    </Card>
  );
};

export default ContactCard;
