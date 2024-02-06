import { Button, Image } from "antd";
import "./Hero.css";

import { useNavigate } from "react-router-dom";
import heroImage1 from "../../assets/hero-images/hero-image-1.png";
import heroImage2 from "../../assets/hero-images/hero-image-5.png";
import arrowOutline from "../../assets/hero-images/ArrowRightOutline.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreRecipe = () => {
    navigate(`/recipes`);
  };
  return (
    <div className="hero-wrapper">
      <div className="hero-image-1-wrapper">
        <Image src={heroImage1} preview={false} className="hero-image-1" />
      </div>
      <div className="hero-text-wrapper">
        <h1 className="hero-title">
          Discover more than <br /> <span>5000+</span> unique <br /> Recipes
        </h1>
        <h3 className="hero-text">
          Search, Save, Share your favourite
          <br />
          recipes instantly
        </h3>
        <Button
          size="large"
          shape="round"
          className="CTA-button"
          icon={
            <Image
              src={arrowOutline}
              preview={false}
              className="CTA-button-icon"
            />
          }
        >
          Start explore
        </Button>
      </div>
      <div className="hero-image-2-wrapper">
        <Image src={heroImage2} preview={false} className="hero-image-2" />
      </div>
    </div>
  );
};

export default Hero;
