import { Link } from "react-router-dom";

function ReadMoreButton({ to, text }) {
  return (
    <Link to={to} className="read-more-button">
      {text}
    </Link>
  );
}


export default ReadMoreButton;
