import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/react-star-wars">
        <img src={logo} alt="star-wars-logo" className="logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/react-star-wars/planets/1">Planets</Link>
        <Link to="/react-star-wars/soon">Vehicles</Link>
        <Link to="/react-star-wars/soon">Starships</Link>
      </nav>
    </header>
  );
}

export default Header;
