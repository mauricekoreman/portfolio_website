import styled from "styled-components";
import HeadingSecondary from "../typography/heading-secondary/heading-secondary.component";
import CustomButton from "../buttons/custom-button/custom-button.component";
import { device } from "../../breakpoints";

export const Card = styled.article`
  background-color: white;
  max-width: 120rem;
  box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.tablet} {
    flex-direction: row;
    padding: 3rem 5rem;
  }

  & > div {
    background: linear-gradient(90deg, #dae0da 15rem, white 15rem);
    padding: 3rem 3rem;
    position: relative;
  }
`;

export const StyledHeadingSecondary = styled(HeadingSecondary)`
  grid-area: heading;
  margin-bottom: 5rem;

  & > h2 {
    font-size: 4rem;

    @media ${device.tablet} {
      font-size: 3.8rem;
    }
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  color: black;
  border-bottom: 1.3px solid black;
  padding-bottom: 0.3rem;
  font-size: 1.5rem;
  letter-spacing: 1.1px;
`;

export const SocialsContainer = styled.div`
  position: absolute;
  right: 3rem;
  top: 50%;

  & > p {
    font-size: var(--fs-small);
    margin-bottom: 1rem;
    display: none;
  }

  & > a {
    display: block;
    color: black;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    top: unset;
    bottom: 3rem;
    right: unset;

    & > p {
      display: block;
    }

    & > a {
      display: inline;
      margin-bottom: 0;
      margin-right: 1rem;
    }
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

  & > .spinner {
    align-self: center;
    justify-self: center;

    @media ${device.tablet} {
      justify-self: left;
    }

    @media ${device.desktop} {
      grid-area: button;
      justify-self: right;
    }
  }

  & > .error__message {
    font-size: var(--fs-small);
    grid-area: err;
    align-self: center;
    justify-self: left;
    color: red;
  }

  @media ${device.tablet} {
    margin-top: 10rem;
    row-gap: 4rem;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "name email"
      "subject subject"
      "message message"
      "button err";
  }

  @media ${device.desktop} {
    grid-template-areas:
      "name email"
      "subject ."
      "message message"
      "button err";
  }
`;

export const InputContainer = styled.div`
  & > * {
    display: block;
  }

  & > textarea {
    resize: none;
  }

  &:nth-child(1) {
    grid-area: name;
  }
  &:nth-child(2) {
    grid-area: email;
  }
  &:nth-child(3) {
    grid-area: subject;
  }
  &:nth-child(4) {
    grid-area: message;
  }
  &:nth-child(5) {
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

export const TextAreaInput = styled(TextInput)`
  height: 7rem;
`;

export const StyledButton = styled(CustomButton)`
  width: 100%;
  height: 4rem;
  opacity: 0.8;

  @media ${device.desktop} {
    width: 70%;
  }
`;
