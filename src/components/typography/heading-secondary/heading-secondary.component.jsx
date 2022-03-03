import {
  HeadingLine,
  TopHeaderContainer,
  TopHeader,
  Line,
} from "../heading-secondary/heading-secondary.styles";

const HeadingSecondary = ({ className, headingText, topText, topColor, headingColor }) => {
  let textArr = headingText.split("\n").map((e, i) => (
    <HeadingLine key={i} color={headingColor}>
      {e}
    </HeadingLine>
  ));

  return (
    <div className={className}>
      <TopHeaderContainer>
        <Line color={topColor} />
        <TopHeader color={topColor}>{topText}</TopHeader>
      </TopHeaderContainer>
      {textArr}
    </div>
  );
};

export default HeadingSecondary;
