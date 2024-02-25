import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="top">BALAZSCSADA PHOTOGRAPHY</div>
      <div className="header-link-container">
        <Link to="/" className="header-link">
          Nature
        </Link>
        <Link to="/city" className="header-link">
          Cities
        </Link>
        <Link to="/about" className="header-link">
          About Me
        </Link>
      </div>
    </div>
  );
}
export default Header;
