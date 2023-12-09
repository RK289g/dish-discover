import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="contact-section-wrapper">
        <h4>Contact Us</h4>
        <div className="contact-section">
          <a
            href="https://www.linkedin.com/in/raisul-karim-saju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined /> Linkedin
          </a>
          <a
            href="https://github.com/RK289g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined /> Github
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100086738076898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined /> Facebook
          </a>

          <a
            href="https://www.instagram.com/raisul_saju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined /> Instagran
          </a>
        </div>
      </div>

      <div className="quick-links">
        <h4>Quick Links</h4>
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
    </footer>
  );
};

export default Footer;
