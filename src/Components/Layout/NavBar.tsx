import { Link } from "react-router-dom";
import { WhiteLogoIcon } from "../../Resources/Resources";
import "../../index.css";

function NavBar() {
  return (
    <nav>
      <div className="navLeft">
        <img className="Logo" src={WhiteLogoIcon} />
      </div>
      <div className="navRight">
        <ul className="nav-bar">
          <li className="NavLinks">
            <Link to="/">HOME</Link>
          </li>
          <li className="NavLinks">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="NavLinks">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
