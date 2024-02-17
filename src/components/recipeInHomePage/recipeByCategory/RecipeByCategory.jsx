import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { recipeByCategoryData } from "./recipeByCategoryData";

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
          {recipeByCategoryData.map((type) => (
            <div
              key={type.id}
              className="category-card-container"
              onClick={() => goToRecipe(type.subName, type.id)}
            >
              <div className="upper-card-wrapper">
                <h1 className="text-recipe-category">{type.name}</h1>
                <Image
                  src={type.image}
                  preview={false}
                  className="card-image"
                />
              </div>
              <div className="lower-card-wrapper">
                <h4>{type.recipeNumber}</h4>
                <ArrowRightOutlined />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeByCategory;
