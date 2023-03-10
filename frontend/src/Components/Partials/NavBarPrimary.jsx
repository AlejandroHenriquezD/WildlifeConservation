import { Link } from "react-router-dom";

const NavBarPrimary = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/About">ABOUT</Link></li>
				<li><Link to="/Locations">LOCATIONS</Link></li>
				<li><Link to="/EndangeredSpecies">ENDAGERED SPECIES</Link></li>
				<li><Link to="/Contact">CONTACT US</Link></li>
				<li><Link to="/Login">LOGIN</Link></li>
				<li><Link to="/ActNow">ACT NOW</Link></li>
			</ul>
			</nav>
	);
}

export default NavBarPrimary;