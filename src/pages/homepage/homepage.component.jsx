import LandingSection from "../../components/sections/landingsection/landingsection.component";
import AboutSection from "../../components/sections/aboutsection/aboutsection.component";
import Workssection from "../../components/sections/workssection/workssection.component";
import Contactsection from "../../components/sections/contactsection/contactsection.component";
import Footersection from "../../components/sections/footersection/footersection.component";

const Homepage = () => (
  <main>
    <LandingSection />
    <AboutSection />
    <Workssection />
    <Contactsection />
    <Footersection />
  </main>
);

export default Homepage;
