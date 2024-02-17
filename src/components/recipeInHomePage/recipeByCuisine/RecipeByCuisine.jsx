import { ArrowRightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import { recipeByCuisineData } from "./recipeByCuisineData";

const RecipeByCuisine = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, recipeIndex) => {
    navigate("/recipes", { state: { recipeKey: stateValue, recipeIndex } });
  };

  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category font-fanlste">Top Cuisines</h1>

        <div className="column-recipe-category">
          {recipeByCuisineData.map((type) => (
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
          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeByCuisine;
