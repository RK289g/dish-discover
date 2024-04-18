import { RightOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Spin, Image } from "antd";
import axios from "axios";
import "./FeaturedRecipe.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        setRecipeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="featured-recipe-wrapper">
      <h1 className="featured-recipe-title font-fanlste">Featured Recipes</h1>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <div>
            <Spin size="large" />
          </div>
        ) : (
          recipeData?.slice(0, 6).map((recData) => (
            <Col xl={8} lg={8} sm={12} key={recData?.idMeal}>
              <Card hoverable className="card">
                <div>
                  <Image
                    className="image"
                    src={recData?.strMealThumb}
                    alt="ThumbNail"
                    preview={false}
                  />
                  <div className="card-text">
                    <div className="card-text-category-likes-wrapper">
                      <div className="card-text-category">
                        <p className="font-inter">{recData?.strCategory}</p>
                      </div>
                      <div className="card-text-likes font-inter">
                        <HeartOutlined className="card-text-likes-icon" />
                        <p>12k likes</p>
                      </div>
                    </div>
                    <h1 className="card-text-title font-inter">
                      {recData?.strMeal && recData.strMeal.length > 18
                        ? recData.strMeal.substring(0, 20) + " ..."
                        : recData.strMeal}
                    </h1>
                    <h5 className="card-instruction-text font-inter ">
                      {recData?.strInstructions.substring(0, 90) + " ..."}
                    </h5>

                    <div className="button-wrapper">
                      <Button
                        onClick={() => {
                          handleClick(recData.idMeal);
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
          ))
        )}
      </Row>
    </div>
  );
};

export default FeaturedRecipe;
