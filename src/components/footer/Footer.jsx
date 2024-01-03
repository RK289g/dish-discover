import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="contact-section-wrapper">
        {/* <h4>Contact Us</h4> */}
        <div className="contact-section">
          <a
            className="logo-linkedin"
            href="https://www.linkedin.com/in/raisul-karim-saju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookFilled />
          </a>
          <a
            className="logo-github"
            href="https://github.com/RK289g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
          </a>

          <a
            className="logo-facebook"
            href="https://www.facebook.com/profile.php?id=100086738076898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </a>

          <a
            className="logo-insta"
            href="https://www.instagram.com/raisul_saju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramFilled />
          </a>
        </div>
      </div>

      <div className="quick-links">
        {/* <h4>Quick Links</h4> */}
        <div className="quick-link-wrapper">
          <Link to="/Recipes" className="items">
            Recipes
          </Link>
          <Link to="/RandomRecipe" className="items">
            Random Recipe
          </Link>
          <Link className="items">Articles</Link>
          <Link className="items">Contact Us</Link>
        </div>
      </div>
      <div>
        <p>© 2024 Dish Discover. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
