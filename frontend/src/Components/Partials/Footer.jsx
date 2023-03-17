import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    // <div className="footer-white-space">
    <footer className="footer">
      <img className="footer-logo" src="/Images/Wildlife_logo.png" alt="" />
      <div className="footer-text">
        <p>
          We are a group of wildlife <br />
          enthusiasts working toward a better <br />
          world for all.
        </p>
        {/* <address>
			insert adresse<br />
			insert city
		</address> */}
      </div>

      <div className="footer-links">
        {/* <li>
          <Link to="/About" className="footer-li-link">
            ABOUT
          </Link>
        </li> */}
        <li>
          <Link to="/Locations" className="footer-li-link">
            LOCATIONS
          </Link>
        </li>
        <li>
          <Link to="/EndangeredSpecies" className="footer-li-link">
            ENDAGERED SPECIES
          </Link>
        </li>
      </div>

      <div className="footer-social">
        <p className="text1">And follow us in social media</p>
        <div className="footer-icons">
          <BsTwitter />
          <BsFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </footer>
    //</div>
  );
};

export default Footer;
