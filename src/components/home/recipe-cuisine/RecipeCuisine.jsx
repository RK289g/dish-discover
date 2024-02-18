import { Col, Image, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { recipeByCuisineData } from "./recipeByCuisineData";
import { useNavigate } from "react-router-dom";

const RecipeCuisine = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, recipeIndex) => {
    navigate("/recipes", { state: { recipeKey: stateValue, recipeIndex } });
  };

  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category font-fanlste">Top Cuisines</h1>

        <Row
          // gutter={[20, 20]}
          justify="center"
          className="column-recipe-category"
        >
          {recipeByCuisineData.map((type) => (
            <Col
              key={type.id}
              className="category-card-container"
              onClick={() => goToRecipe(type.subName, type.id)}
              md={12}
              lg={8}
              xl={6}
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
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecipeCuisine;