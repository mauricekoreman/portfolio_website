import LandingSection from "../../components/sections/landingsection/landingsection.component";

import { AboutSection } from "./homepage.styles";

const Homepage = () => (
  <main>
    <section>
      <LandingSection />
    </section>
    <section>
      <AboutSection />
    </section>
    <section>Works</section>
    <section>Contact</section>
  </main>
);

export default Homepage;
