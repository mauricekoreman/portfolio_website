import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import HeaderSection from "./components/sections/headersection/headersection.componenx";

const App = () => (
  <div>
    <HeaderSection />
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    <footer></footer>
  </div>
);

export default App;
