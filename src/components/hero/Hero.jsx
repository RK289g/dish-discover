import "./Hero.css";

import display1 from "./images/display-2.jpg";

const Hero = () => {
  return (
    <div className="Hero-wrapper">
      <img className="hero-image" src={display1} alt="" />
      <div className="hero-text">
        <h4 className="Hero-header">
          Discover more than 5000+ <span>Unique Recipes</span>
        </h4>
        <h4 className="text-2">
          Search, Save, and Share Your Favorite Recipes Instantly.
        </h4>
      </div>
    </div>
  );
};

export default Hero;
