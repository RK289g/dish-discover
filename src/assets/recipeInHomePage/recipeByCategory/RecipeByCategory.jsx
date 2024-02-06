import { useNavigate } from "react-router-dom";
import "./recipeByCategory.css";
import breakfastItems from "../../../assets/top-categories/breakfast-items.png";
import dessertItems from "../../../assets/top-categories/dessert-items.png";
import beginnerItems from "../../../assets/top-categories/starter-items.png";
import additionalItems from "../../../assets/top-categories/additiona-items.png";
import burger from "../../../assets/top-categories/burger.png";

import { Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const RecipeByCategory = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, CategoryRecipeIndex) => {
    navigate("/recipes", {
      state: { CategoryRecipeKey: stateValue, CategoryRecipeIndex },
    });
  };

  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category font-fanlste">Top Categories</h1>

        <div className="column-recipe-category">
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Breakfast", 1)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Breakfast Items</h1>
              <div className="card-image-wrapper">
                <Image
                  src={burger}
                  preview={false}
                  className="card-image"
                />
              </div>
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Dessert", 3)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Dessert Items</h1>
              <div className="card-image-wrapper">
                <Image
                  src={dessertItems}
                  preview={false}
                  className="card-image"
                />
              </div>
            </div>
            <div className="lower-card-wrapper">
              <h4>200+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Starter", 11)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Starter Items</h1>
              <div className="card-image-wrapper">
                <Image
                  src={beginnerItems}
                  preview={false}
                  className="card-image"
                />
              </div>
            </div>
            <div className="lower-card-wrapper">
              <h4>150+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Side", 10)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">
                Side <br /> Items
              </h1>
              <div className="card-image-wrapper">
                <Image
                  src={additionalItems}
                  preview={false}
                  className="card-image"
                />
              </div>
            </div>
            <div className="lower-card-wrapper">
              <h4>60+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeByCategory;
