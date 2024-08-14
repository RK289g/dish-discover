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

  const text1 = "Discover more than";
  const text2 = "5000+";
  const text3 = "unique";
  const text4 = "Recipes";
  const textVariants = {
    hidden: {
      clipPath: "inset(0 50% 0 50%)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each letter
      },
    },
  };
  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {text1.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h1 className="hero-title font-fanlste">
          <motion.span
            className="hero-title-span"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            delay="1s"
          >
            {text2.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>{" "}
          <motion.span
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
          >
            {text3.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text4.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
        <motion.h3
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          style={{ transformOrigin: "center" }}
        >
          Search, Save, Share your favourite
          <br />
          recipes instantly
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
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
