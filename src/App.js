import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import HeaderSection from "./components/sections/headersection/headersection.componenx";

const App = () => (
  <>
    <HeaderSection />
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </>
);

export default App;
