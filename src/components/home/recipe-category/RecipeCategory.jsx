import { useNavigate } from "react-router-dom";
import "./RecipeCategory.css";
import { recipeByCategoryData } from "./recipeByCategoryData";
import { Col, Image, Row } from "antd";

const RecipeCategory = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, CategoryRecipeIndex) => {
    navigate("/recipes", {
      state: { CategoryRecipeKey: stateValue, CategoryRecipeIndex },
    });
  };

  return (
    <div className="home-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category font-fanlste">Top Categories</h1>

        <Row
          gutter={[20, 20]}
          justify="center"
          className="column-recipe-category"
        >
          {recipeByCategoryData.map((type) => (
            <Col
              key={type.id}
              className="category-card-container"
              onClick={() => goToRecipe(type.subName, type.id)}
              md={12}
              lg={8}
              xl={8}
            >
              <Image src={type.image} preview={false} className="card-image" />
              <div className="categories-text-wrapper">
                <h1 className="categories-text-title font-inter">
                  {type.name}
                </h1>
                <h4 className="categories-text-items font-inter">
                  {type.recipeNumber}
                </h4>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecipeCategory;
