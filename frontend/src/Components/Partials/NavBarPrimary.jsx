// import { Link } from "react-router-dom";
import "./NavBarPrimary.scss";
import { AiOutlineMenu } from "react-icons/ai";

const NavBarPrimary = () => {
  return (
    // <nav className="NavBar-nav">
    // 	<button className="NavBar-button">Click</button>
    // 	<ul className="NavBar-ul">
    // 		<li><Link to="/" className="NavBar-li-link">HOME</Link></li>
    // 		<li><Link to="/About" className="NavBar-li-link">ABOUT</Link></li>
    // 		<li><Link to="/Locations" className="NavBar-li-link">LOCATIONS</Link></li>
    // 		<li><Link to="/EndangeredSpecies" className="NavBar-li-link">ENDAGERED SPECIES</Link></li>
    // 		<li><Link to="/Contact" className="NavBar-li-link">CONTACT US</Link></li>
    // 		<li><Link to="/Login" className="NavBar-li-link">LOGIN</Link></li>
    // 		<li><Link to="/ActNow" className="NavBar-li-link">ACT NOW</Link></li>
    // 	</ul>
    // 	</nav>

    <div className="NavBar-dropdown">
      <button className="NavBar-button"><AiOutlineMenu/></button>
      <div className="NavBar-content">
        <a href="/about">ABOUT</a>
        <a href="/Locations">LOCATIONS </a>
        <a href="/EndangeredSpecies">ENDAGERED SPECIES </a>
				<a href="/Login">LOGIN </a>
				<a href="/Login">SIGN UP</a>
      </div>
    </div>
  );
};

export default NavBarPrimary;
