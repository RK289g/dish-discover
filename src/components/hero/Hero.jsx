import { Button } from "antd";
import "./Hero.css";

import display1 from "./images/display-2.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreRecipe = () => {
    navigate(`/cuisines`);
  };
  return (
    <div className="Hero-wrapper">
      <img className="hero-image" src={display1} alt="" />
      <div className="hero-text">
        <h4 className="hero-header">
          Discover more than 5000+ <span>Unique Recipes</span>
        </h4>
        <h4 className="text-2">
          Search, Save, and Share Your Favorite Recipes Instantly.
        </h4>
        <Button
          onClick={() => {
            handleExploreRecipe();
          }}
          className="btn-get-recipe"
        >
          Explore Recipes
        </Button>
      </div>
    </div>
  );
};

export default Hero;
