import { RightOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
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
    <div className="home-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category featured-title font-fanlste">
          Popular Recipes
        </h1>
        <div className="card-wrapper">
          <Row
            align={"middle"}
            gutter={[16, 16]}
            style={{ margin: "0px", padding: "0px 0px" }}
          >
            {isLoading ? (
              <div>
                <Spin size="large" />
              </div>
            ) : (
              recipeData?.slice(0, 6).map((recData) => (
                <Col
                  align="middle"
                  xl={8}
                  lg={12}
                  sm={24}
                  key={recData?.idMeal}
                >
                  <Card hoverable className="card">
                    <div>
                      <img
                        className="image"
                        src={recData?.strMealThumb}
                        alt="ThumbNail"
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
      </div>
    </div>
  );
};

export default PopularRecipe;
