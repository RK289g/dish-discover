import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import "./Home.css";
import Card from "antd/es/card/Card";
import { Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        setRecipeData(res.data.meals);
        console.log(recipeData.meals[0]);
        // console.log(recipeData.meals[1]);
        // console.log(recipeData.meals[2]);
        // console.log(recipeData.meals[3]);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleClick = (recipeId) => {
    console.log(recipeId);
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <h1 className="popular-recipe">Popular Recipe</h1>
      <Row gutter={20} style={{ margin: "0px" }}>
        {recipeData?.map((recData) => {
          return (
            <Col key={recData?.idMeal}>
              <Card className="card">
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={recData?.strMealThumb}
                    alt="ThumbNail"
                  />
                </div>
                <div className="card-text">
                  <h1>{recData?.strMeal}</h1>
                  <div className="text-btn-wrapper">
                    <div className="tag-div">
                      <p>Category: {recData?.strCategory}</p>
                      <p>Tags: {recData?.strTags}</p>
                    </div>
                    <div className="btn-div">
                      <Button
                        className="btn-main"
                        type="primary"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        onClick={() => {
                          handleClick(recData.idMeal);
                        }}
                      >
                        view full recipe
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
