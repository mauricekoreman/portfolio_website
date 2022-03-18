import HeadingPrimary from "../../components/typography/heading-primary/heading-primary.component";
import { NotFoundContainer } from "./nout-found-page.styles";

const NotFoundPage = () => (
  <NotFoundContainer>
    <HeadingPrimary headingText={"There is nothing here!"} />
  </NotFoundContainer>
);

export default NotFoundPage;
