import "./RecipeCard.css";
import PropTypes from "prop-types";
import { Button, Card, Col, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";

const RecipeCard = ({ recipeData }) => {
  const [visibleRecipes, setVisibleRecipes] = useState(9);
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleSeeMore = () => {
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 6);
  };

  return (
    <div className="home-wrapper">
      <div className="cuisines-type-wrapper card-wrapper">
        <Row
          align={"middle"}
          gutter={[16, 16]}
          style={{ margin: "0px", padding: "0px 0px" }}
        >
          {recipeData?.slice(0, visibleRecipes).map((recData) => {
            return (
              <Col xl={8} md={12} sm={24} key={recData?.idMeal}>
                <Card hoverable className="card">
                  <Skeleton
                    active={true}
                    loading={false}
                    avatar={{ shape: "square", size: 350 }}
                  >
                    <div>
                      <img
                        className="image"
                        src={recData?.strMealThumb}
                        alt="ThumbNail"
                      />
                      <div className="card-text">
                        <h1 className=" card-title cfont-inter">
                          {recData?.strMeal && recData.strMeal.length > 18
                            ? recData.strMeal.substring(0, 20) + " ..."
                            : recData.strMeal}
                        </h1>
                        <div className="text-btn-wrapper">
                          <h5 className="card-subtitle font-inter">
                            Enjoy this delicious recipe! Easy to make and
                            bursting with flavor. Perfect for any occasion.
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
                  </Skeleton>
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
    </div>
  );
};

RecipeCard.propTypes = {
  recipeData: PropTypes.array.isRequired,
};

export default RecipeCard;
