import HeadingPrimary from "../../components/typography/heading-primary/heading-primary.component";
import { NotFoundContainer } from "./not-found-page.styles";

const NotFoundPage = () => (
  <NotFoundContainer>
    <HeadingPrimary headingText={"Page not found"} />
    <HeadingPrimary headingText={"There is nothing here!"} />
  </NotFoundContainer>
);

export default NotFoundPage;
