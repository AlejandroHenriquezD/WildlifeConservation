import { Link } from "react-router-dom";
import "./NavBarPrimary.scss";

const NavBarPrimary = () => {
	return (
		<nav className="nav">
			<ul className="ul">
				<li><Link to="/" className="li-link">HOME</Link></li>
				<li><Link to="/About" className="li-link">ABOUT</Link></li>
				<li><Link to="/Locations" className="li-link">LOCATIONS</Link></li>
				<li><Link to="/EndangeredSpecies" className="li-link">ENDAGERED SPECIES</Link></li>
				<li><Link to="/Contact" className="li-link">CONTACT US</Link></li>
				<li><Link to="/Login" className="li-link">LOGIN</Link></li>
				<li><Link to="/ActNow" className="li-link">ACT NOW</Link></li>
			</ul>
			</nav>
	);
}

export default NavBarPrimary;