import { useNavigate } from "react-router-dom";
import "./recipeByCategory.css";
import breakfastItems from "../../../assets/top-categories/breakfast-items.png";
import dessertItems from "../../../assets/top-categories/dessert-items.png";
import beginnerItems from "../../../assets/top-categories/starter-items.png";
import additionalItems from "../../../assets/top-categories/additiona-items.png";
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
        <h1 className="title-recipe-category">Top Categories</h1>

        <div className="column-recipe-category">
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Breakfast", 1)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Breakfast Items</h1>
              <Image
                src={breakfastItems}
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
            onClick={() => goToRecipe("Dessert", 3)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Dessert Items</h1>
              <Image
                src={dessertItems}
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
            onClick={() => goToRecipe("Starter", 11)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Starter Items</h1>
              <Image
                src={beginnerItems}
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
            onClick={() => goToRecipe("Side", 10)}
          >
            <div className="upper-card-wrapper">
              <h1 className="text-recipe-category">Side Items</h1>
              <Image
                src={additionalItems}
                preview={false}
                className="card-image"
              />
            </div>
            <div className="lower-card-wrapper">
              <h4>300+ recipes</h4>
              <ArrowRightOutlined />
            </div>
          </div>
          {/* <div
            className="category-card-container"
            onClick={() => goToRecipe("Starter", 11)}
          >
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Starter</h1>
          </div>
          <div
            className="category-card-container"
            onClick={() => goToRecipe("Dessert", 3)}
          >
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Dessert</h1>
          </div>

          <div
            className="category-card-container"
            onClick={() => goToRecipe("Side", 10)}
          >
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Side</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeByCategory;
