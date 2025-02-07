import { Link } from "react-router-dom";

function BackToHomeButton() {
  return (
    <Link to="/" className="back-to-home-button">
      ← Tillbaka till start
    </Link>
  );
}

export default BackToHomeButton;
