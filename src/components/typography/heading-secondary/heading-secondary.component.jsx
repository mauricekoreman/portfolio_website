import {
  HeadingLine,
  TopHeaderContainer,
  TopHeader,
  Line,
} from "../heading-secondary/heading-secondary.styles";

const HeadingSecondary = ({ className, headingText, topText, topColor, headingColor }) => {
  let textArr = headingText
    .split("\n")
    .map((i) => <HeadingLine color={headingColor}>{i}</HeadingLine>);

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
