import styled from "styled-components";
import HeadingSecondary from "../typography/heading-secondary/heading-secondary.component";
import CustomButton from "../buttons/custom-button/custom-button.component";

export const Card = styled.article`
  background-color: white;
  max-width: 100rem;
  box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;

  & > div {
    background: linear-gradient(90deg, #dae0da 15rem, white 15rem);

    /* For desktop */
    /* background: linear-gradient(90deg, #dae0da 70%, white 70%); */
    padding: 3rem 3rem;
    position: relative;
  }
`;

export const StyledHeadingSecondary = styled(HeadingSecondary)`
  grid-area: heading;
  margin-bottom: 5rem;
  /* border: 1px solid darkolivegreen; */
`;

export const Mail = styled.a`
  text-decoration: none;
  color: black;
  border-bottom: 1.3px solid black;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  letter-spacing: 1.1px;

  /* &:link,
  &:visited,
  &:hover,
  &:active {
    
  } */
`;

export const SocialsContainer = styled.div`
  /* border: 1px solid darksalmon; */
  position: absolute;
  right: 3rem;
  top: 50%;

  & > p {
    font-size: var(--fs-small);
    margin-bottom: 1rem;
    display: none;
  }

  & > svg {
    display: block;
    font-size: 2.5rem;
    stroke-width: 1.5px;
    stroke-opacity: 0.51;
    margin-bottom: 1.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 5rem;
  padding: 0 3rem 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "name"
    "email"
    "subject"
    "message"
    "button";
  gap: 4rem;

  /* For desktop */
  /* row-gap: 3rem;
  column-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name email"
    "subject ."
    "message message"
    "button ."; */
  /* background-color: cyan; */
`;

export const InputContainer = styled.div`
  & > * {
    display: block;
  }

  & > textarea {
    resize: none;
  }

  &:nth-child(1) {
    /* border: 1px solid blue; */
    grid-area: name;
  }
  &:nth-child(2) {
    /* border: 1px solid darkmagenta; */
    grid-area: email;
  }
  &:nth-child(3) {
    /* border: 1px solid orangered; */
    grid-area: subject;
  }
  &:nth-child(4) {
    grid-area: message;
  }
  &:nth-child(5) {
    /* border: 1px solid green; */
    grid-area: button;
  }
`;

export const Label = styled.label`
  font-size: var(--fs-medium);
  font-weight: var(--fw-bold);
  color: #4b4a4a;
`;

export const TextInput = styled.input`
  border: none;
  margin-top: 1rem;
  font-family: var(--font-family);
  font-size: var(--fs-medium);
  font-weight: var(--fw-regular);
  width: 100%;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.5rem;
  transition: 0.05s ease-out;

  &::placeholder {
    color: #4b4a4a;
    opacity: 0.53;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #707070;
  }
`;

export const StyledButton = styled(CustomButton)`
  width: 20rem;
  height: 4rem;
  opacity: 0.8;
`;
