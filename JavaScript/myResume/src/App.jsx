import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />               {/* Startsidan */}
        <Route path="/about" element={<About />} />         {/* Om mig */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* Projekt */}
        <Route path="/contact" element={<ContactPage />} /> {/* Kontakt */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
