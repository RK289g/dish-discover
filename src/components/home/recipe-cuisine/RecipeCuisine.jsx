import { Col, Image, Row } from "antd";
import { recipeByCuisineData } from "./recipeByCuisineData";
import { useNavigate } from "react-router-dom";

const RecipeCuisine = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, recipeIndex) => {
    navigate("/recipes", { state: { recipeKey: stateValue, recipeIndex } });
  };

  return (
    <div className="recipe-category-wrapper">
      <h1 className="title-recipe-category font-fanlste">Top Cuisines</h1>

      <Row gutter={24}>
        {recipeByCuisineData.map((type) => (
          <Col
            key={type.id}
            onClick={() => goToRecipe(type.subName, type.id)}
            md={12}
            lg={8}
            xl={8}
          >
            <div className="category-card-container">
              <Image
                src={type.image}
                preview={false}
                className="category-card-image"
              />
              <div className="categories-text-wrapper">
                <h1 className="categories-text-title font-inter">
                  {type.name}
                </h1>
                <h4 className="categories-text-items font-inter">
                  {type.recipeNumber}
                </h4>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecipeCuisine;