import { useSelector, useDispatch } from "react-redux";
import { toggleColor } from "../redux/themeSlice";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import '../styles/navbar.css';

function Navbar() {
  const color = useSelector((state) => state.theme.color); // Hämta färg från Redux
  const dispatch = useDispatch(); // Skapa dispatch-funktion

  return (
    <nav className="navbar" style={{ backgroundColor: color }}>
      <div className="left">
        <RouterLink to="/">♡ Julia Rasmusson</RouterLink>
      </div>
      <div className="right">
        <ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink>
        <ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink>
        <ScrollLink to="skills-section" smooth={true} duration={500}>Skills</ScrollLink>
        <ScrollLink to="leave-message-section" smooth={true} duration={500}>Contact</ScrollLink>

        {/* Knapp för att byta färg */}
        <button onClick={() => dispatch(toggleColor())}>Change Color</button>
      </div>
    </nav>
  );
}

export default Navbar;
