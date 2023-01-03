import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";
import Texts from "./components/Texts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
