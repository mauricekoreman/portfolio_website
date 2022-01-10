import { HeadingContainer, HeadingLine } from "./heading-primary.styles";

const HeadingPrimary = ({ lineOne, lineTwo }) => (
  <HeadingContainer>
    <HeadingLine>{lineOne}</HeadingLine>
    <HeadingLine>{lineTwo}</HeadingLine>
  </HeadingContainer>
);

export default HeadingPrimary;
