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
  const [disabled, setDisabled] = useState(false);

  let templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    setLoading(true);
    emailjs.send("portfolioform", "template_contact", templateParams, "RqmwKpIqKFAs96gv0").then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setDisabled(false);
      },
      (error) => {
        console.log(error);
        setErrMsg("Something went wrong...");
        setLoading(false);
        setDisabled(false);
      }
    );

    setSuccess(false);
    setErrMsg("");
  }

  return (
    <Card>
      <div>
        <StyledHeadingSecondary
          topColor={"rgba(0, 0, 0, .31)"}
          headingText={"Send Me A \n Message!"}
        />
        <Mail href='mailto:hello@mauricekoreman.nl' taget='_blank' rel='noreferrer'>
          hello@mauricekoreman.nl
        </Mail>
        <SocialsContainer>
          <p>Find me</p>

          <a href='https://www.instagram.com/mauricekoreman/' target='_blank' rel='noreferrer'>
            <FiInstagram {...iconStyles} />
          </a>
          <a href='https://www.linkedin.com/in/mauricekoreman/' target='_blank' rel='noreferrer'>
            <FiLinkedin {...iconStyles} />
          </a>
          <a href='https://github.com/mauricekoreman' target='_blank' rel='noreferrer'>
            <FiGithub {...iconStyles} />
          </a>
        </SocialsContainer>
      </div>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Name</Label>
          <TextInput
            required
            type='text'
            name='contact_name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Your name'
          />
        </InputContainer>

        <InputContainer>
          <Label>Email</Label>
          <TextInput
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='your@email.com'
            value={email}
          />
        </InputContainer>

        <InputContainer>
          <Label>Subject</Label>
          <TextInput
            type='text'
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's the topic?"
            value={subject}
          />
        </InputContainer>

        <InputContainer>
          <Label>Your message</Label>
          <TextAreaInput
            required
            as='textarea'
            type='text'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Tell me.. :D'
            value={message}
          />
        </InputContainer>

        <InputContainer>
          <StyledButton disabled={disabled} isOutlined type='submit'>
            Send it!
          </StyledButton>
        </InputContainer>
        <AnimatePresence>
          {loading && (
            <Spinner height={"3rem"} width={"3rem"} borderWidth={"3px"} success={success} />
          )}
        </AnimatePresence>
        {errMsg && <p className='error__message'>{errMsg}</p>}
      </Form>
    </Card>
  );
};

export default ContactCard;



