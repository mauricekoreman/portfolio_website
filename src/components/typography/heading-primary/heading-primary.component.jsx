import { TopHeaderContainer, TopHeader, HeadingLine, BottomText } from "./heading-primary.styles";

const HeadingPrimary = ({ headingText, topText, bottomText }) => {
  let textArr = headingText.split("\n").map((e, i) => <HeadingLine key={i}>{e}</HeadingLine>);

  return (
    <div>
      <TopHeaderContainer>
        <TopHeader>{topText}</TopHeader>
      </TopHeaderContainer>
      {textArr}
      <BottomText>{bottomText}</BottomText>
    </div>
  );
};

export default HeadingPrimary;

