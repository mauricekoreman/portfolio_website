import { ButtonContainer } from "./custom-button.styles";

const CustomButton = ({ className, children, ...props }) => (
  <ButtonContainer className={className} {...props}>
    {children}
  </ButtonContainer>
);

export default CustomButton;
