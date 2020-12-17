import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/react-star-wars/planets/1">
        <img src={logo} alt="star-wars-logo" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
