import { ArrowRightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";

import americanItems from "../../../assets/top-cuisines/american-items.png";
import mexicancanItems from "../../../assets/top-cuisines/mexican-items.png";
import japaneseItems from "../../../assets/top-cuisines/japanese-items.png";
import chineseItems from "../../../assets/top-cuisines/chinese-items.png";

const RecipeByCuisine = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, recipeIndex) => {
    navigate("/recipes", { state: { recipeKey: stateValue, recipeIndex } });
  };

  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category">Recipe By Cuisine</h1>

        <div className="column-recipe-category">
          <div
            className="category-card-container"
            onClick={() => goToRecipe("American", 0)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">American Cusines</h1>
              <Image
                src={americanItems}
                preview={false}
                className="card-image"
              />
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Mexican", 17)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Mexican Cusines</h1>
              <Image
                src={mexicancanItems}
                preview={false}
                className="card-image"
              />
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Indian", 10)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Indian Cusines</h1>
              <Image
                src={japaneseItems}
                preview={false}
                className="card-image"
              />
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("British", 1)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">british Cuisines</h1>
              <Image
                src={chineseItems}
                preview={false}
                className="card-image"
              />
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeByCuisine;
