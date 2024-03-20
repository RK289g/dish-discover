import { Button, Image } from "antd";
import "./RecipeOftheDay.css";
import dayImage from "../../assets/recipeOfTheDay/dayImage.png";
// import frame from "../../assets/logo/Frame-1000015203.png";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const RecipeOftheDay = () => {
  const navigate = useNavigate();
  const recipeOftheDayClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category=inner-wrapper">
        <>
          <h1 className="title-recipe-category font-fanlste">
            Recipe Of the Day
          </h1>
          <div className="day-card-wrapper">
            <div className="day-card-inner-wrapper">
              <div className="day-image-wrapper">
                <Image src={dayImage} preview={false} className="day-image" />
              </div>
              <div className="day-text">
                <h2 className="day-text-header font-inter">
                  Chicken Parmentier
                </h2>
                <h5 className="day-text-paragraph font-inter">
                  Italian-American favorite featuring breaded and fried <br />{" "}
                  chicken cutlets topped with marinara sauce and melted <br />{" "}
                  cheese, served with pasta.
                </h5>
                <Button
                  className="day-recipe-button"
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
        </>
      </div>
    </div>
  );
};

export default RecipeOftheDay;
