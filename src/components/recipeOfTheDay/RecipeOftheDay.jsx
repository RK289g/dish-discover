import { Button, Image } from "antd";
import "./RecipeOftheDay.css";
import dayImage from "../../assets/recipeOfTheDay/dayImage.png";
// import frame from "../../assets/logo/Frame-1000015203.png";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeOftheDay = () => {
  const navigate = useNavigate();
  const recipeOftheDayClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="recipe-category-wrapper">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 5 }}
        className="featured-recipe-title font-fanlste"
      >
        Recipe Of the Day
      </motion.h1>
      <div className="day-card-wrapper">
        <div className="day-image-wrapper">
          <Image src={dayImage} preview={false} className="day-image" />
        </div>
        <div className="day-text">
          <div className="day-text-category card-text-category">
            <p className="font-inter">French</p>
          </div>
          <p className="day-text-header font-inter">Chicken Parmentier</p>
          <h5 className="day-text-paragraph font-inter">
            French favorite featuring breaded and fried chicken
            <br /> cutlets topped with marinara sauce and melted <br /> cheese,
            served with pasta.
          </h5>
          <Button
            className="day-recipe-button font-inter"
            icon={<RightOutlined className="Right-Outlined" />}
            onClick={() => {
              recipeOftheDayClick(52879);
            }}
          >
            See Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeOftheDay;
