import {
  TopHeaderContainer,
  Line,
  TopHeader,
  HeadingLine,
  BottomText,
} from "./heading-primary.styles";

const HeadingPrimary = ({ headingText, topText, bottomText }) => {
  let textArr = headingText.split("\n").map((i) => <HeadingLine>{i}</HeadingLine>);

  return (
    <div>
      <TopHeaderContainer>
        <Line />
        <TopHeader>{topText}</TopHeader>
      </TopHeaderContainer>
      {textArr}
      <BottomText>{bottomText}</BottomText>
    </div>
  );
};

export default HeadingPrimary;
