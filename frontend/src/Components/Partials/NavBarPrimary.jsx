import { Link } from "react-router-dom";

const NavBarPrimary = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/About">ABOUT</Link></li>
				<li><Link to="/Locations">LOCATIONS</Link></li>
				<li><Link to="/EndangeredSpecies">ENDAGERED SPECIES</Link></li>
				<li><Link to="/Sign-in">SIGN IN</Link></li>
				<li><Link to="/Sign-up">SIGN UP!</Link></li>
			</ul>
			</nav>
	);
}

export default NavBarPrimary;