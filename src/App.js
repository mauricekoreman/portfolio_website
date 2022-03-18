import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import HeaderSection from "./components/sections/headersection/headersection.componenx";
import AllProjectsPage from "./pages/allProjectspage/AllProjectsPage.component";
import ScrollToTop from "./components/scrollToTop/scrollToTop.component";
import Project from "./components/project/project.component";
import NotFoundPage from "./pages/notFoundPage/not-fount-page.component";

const App = () => (
  <>
    <HeaderSection />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<AllProjectsPage />} />
      <Route path="projects/:project" element={<Project />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
