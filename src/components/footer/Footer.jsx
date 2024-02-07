import "./Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LinkedinIcon from "../common/logo/LinkedInIcon";
import TwitterIcon from "../common/logo/TwitterIcon";
import FacebookIcon from "../common/logo/FacebookIcon";
import { Divider } from "antd";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer className="footer-wrapper ">
      <div className="quick-links">
        <div className="quick-link-wrapper">
          <Link to="/" className="items font-poppins">
            Home
          </Link>
          <Divider type="vertical" className="footer-divider" />
          <Link to="/recipes" className="items">
            Recipes
          </Link>
          <Divider type="vertical" className="footer-divider" />
          <Link to="/random-recipe" className="items">
            Random Recipe
          </Link>
          <Divider type="vertical" className="footer-divider" />
          <Link to="/contact-us" className="items">
            Contact Us
          </Link>
        </div>
      </div>
      <h4 className="footer-heading font-inter">Connect with us</h4>
      <div className="contact-section-wrapper">
        <div className="contact-section">
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

      <div>
        <p className="copyright-text font-inter">
          © {currentYear} Dish Discover. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
