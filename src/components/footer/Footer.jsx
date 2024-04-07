import "./Footer.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import logoWhite from "../../assets/logo/logo-white.png";
import LinkedinIcon from "../common/logo/LinkedInIcon";
import TwitterIcon from "../common/logo/TwitterIcon";
import FacebookIcon from "../common/logo/FacebookIcon";
import { useState } from "react";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer className="footer-wrapper ">
      <div className="footer-middle-wrapper">
        <div className="footer-inner-wrapper">
          <div className="footer-title-section">
            <Link to="/">
              <Image src={logoWhite} preview={false} className="footer-logo" />
            </Link>
            <div className="social-follow-wrapper">
              <h3 className="follow-title font-inter">Follow Us</h3>
              <div className="social-section">
                <div>
                  <Link
                    to="https://www.facebook.com/profile.php?id=100086738076898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-user-link"
                  >
                    <FacebookIcon />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://twitter.com/RaisulSaju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-user-link"
                  >
                    <TwitterIcon />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://www.linkedin.com/in/raisul-karim-saju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-user-link"
                  >
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-link-section">
            <div className="all-recipes">
              <h3 className="all-recipes-title font-inter">Recipies</h3>
              <div className="all-recipes-wrapper">
                <Link to="/" className="footer-links font-inter">
                  Home
                </Link>
                <Link to="/recipes" className="footer-links font-inter">
                  Recipes
                </Link>
                <Link to="/random-recipe" className="footer-links font-inter">
                  Random Recipe
                </Link>
              </div>
            </div>
            <div className="useful-links">
              <h3 className="all-recipes-title font-inter">Useful Links</h3>
              <div className="all-recipes-wrapper">
                <Link className="footer-links font-inter">About Us</Link>
                <Link className="footer-links font-inter">FAQ</Link>
                <Link to="/contact-us" className="footer-links font-inter">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
        <p className="copyright-text font-inter">
          © {currentYear} Dish Discover. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
