import { Button, Image } from "antd";
import "./Hero.css";

import { useNavigate } from "react-router-dom";
import heroImage1 from "../../assets/hero-images/hero-image-1.png";
import heroImage2 from "../../assets/hero-images/hero-image-5.png";
import arrow from "../../assets/hero-images/arrow.png";
import { motion } from "framer-motion";

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
      <motion.div
        className="hero-text-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title font-fanlste"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover more than
        </motion.h1>
        <motion.h1
          className="hero-title font-fanlste"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="hero-title-span">5000+</span> unique <br /> Recipes
        </motion.h1>
        <motion.h3
          className="hero-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Search, Save, Share your favourite
          <br />
          recipes instantly
        </motion.h3>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            size="large"
            className="explore-CTA-button"
            onClick={() => handleExploreRecipe()}
            icon={
              <Image src={arrow} preview={false} className="CTA-button-icon" />
            }
          >
            Start Explore
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="hero-image-2-wrapper"
      >
        <Image src={heroImage2} preview={false} className="hero-image-2" />
      </motion.div>
    </div>
  );
};

export default Hero;
