import "./RecipeCard.css";
import PropTypes from "prop-types";
import { Button, Card, Col, Row} from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";

const RecipeCard = ({ recipeData }) => {
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleSeeMore = () => {
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 6);
  };

  return (
    <div className="cuisines-type-wrapper">
      <Row gutter={50} style={{ margin: "0px", padding: "0px 20px" }}>
        {recipeData?.slice(0, visibleRecipes).map((recData) => {
          return (
            <Col xl={8} md={12} sm={24} key={recData?.idMeal}>
              <Card hoverable className="card">
                  <div>
                    <img
                      className="image"
                      src={recData?.strMealThumb}
                      alt="ThumbNail"
                    />
                    <div className="card-text">
                      <h1 className="font-inter">
                        {recData?.strMeal && recData.strMeal.length > 18
                          ? recData.strMeal.substring(0, 20) + " ..."
                          : recData.strMeal}
                      </h1>
                      <div className="text-btn-wrapper">
                        <h5 className="font-inter">
                          {recData?.strInstructions.substring(0, 90) + " ..."}
                        </h5>
                      </div>
                      <div className="button-wrapper">
                        <Button
                          onClick={() => {
                            handleRecipeClick(recData.idMeal);
                          }}
                          className="card-button"
                          icon={<RightOutlined />}
                        >
                          See Recipe
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
            </Col>
          );
        })}
      </Row>
      {visibleRecipes < recipeData?.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button className="btn-see-more" onClick={handleSeeMore}>
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

RecipeCard.propTypes = {
  recipeData: PropTypes.array.isRequired,
};

export default RecipeCard;
