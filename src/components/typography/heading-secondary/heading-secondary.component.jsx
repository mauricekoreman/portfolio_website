import {
  HeadingContainer,
  HeadingLine,
  TopHeaderContainer,
  TopHeader,
  Line,
} from "../heading-secondary/heading-secondary.styles";

const HeadingSecondary = ({ lineOne, lineTwo, topText }) => (
  <div>
    <TopHeaderContainer>
      <Line />
      <TopHeader>{topText}</TopHeader>
    </TopHeaderContainer>
    <HeadingContainer>
      <HeadingLine>{lineOne}</HeadingLine>
      <HeadingLine>{lineTwo}</HeadingLine>
    </HeadingContainer>
  </div>
);

export default HeadingSecondary;
