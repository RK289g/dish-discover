import "./RecipeCard.css";
import PropTypes from "prop-types";
import { Button, Card, Col, Image, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
              <Card
                onClick={() => {
                  handleRecipeClick(recData.idMeal);
                }}
                hoverable
                className="card-name"
              >
                <Skeleton
                  active={true}
                  loading={false}
                  avatar={{ shape: "square", size: 350 }}
                >
                  <div>
                    <Image
                      className="image"
                      src={recData?.strMealThumb}
                      alt="ThumbNail"
                      preview={false}
                    />
                    <div className="card-text recipe-card-text">
                      <h1>{recData?.strMeal}</h1>
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
  );
};

RecipeCard.propTypes = {
  recipeData: PropTypes.array.isRequired,
};

export default RecipeCard;
