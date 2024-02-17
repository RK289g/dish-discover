import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import "./Home.css";
import Card from "antd/es/card/Card";
import { Col, Row, Button } from "antd"; // Import Button from antd
import { useNavigate } from "react-router-dom";

import { RightOutlined } from "@ant-design/icons";
import RecipeByCategory from './../../components/recipeInHomePage/recipeByCategory/RecipeByCategory';
import RecipeByCuisine from './../../components/recipeInHomePage/recipeByCuisine/RecipeByCuisine';
import RecipeOftheDay from './../../components/recipeOfTheDay/RecipeOftheDay';

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        setRecipeData(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleSeeMore = () => {
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 6);
  };

  return (
    <div>
      <div>
        <Hero />
        <RecipeByCategory />
        <RecipeByCuisine />
        <RecipeOftheDay />
      </div>
      <div className="home-wrapper">
        <h1 className="popular-recipe font-fanlste">Featured Recipes</h1>
        <div className="card-wrapper">
          <Row
            align={"middle"}
            gutter={[16, 16]}
            style={{ margin: "0px", padding: "0px 0px" }}
          >
            {recipeData?.slice(0, visibleRecipes).map((recData) => (
              <Col
                align="middle"
                lg={8}
                xs={24}
                sm={12}
                key={recData?.idMeal}
                // style={{ border: "1px solid red" }}
              >
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
                        {/* <p>Category: {recData?.strCategory}</p> */}
                        <h5 className="font-inter">{recData?.strInstructions.substring(0,90) + " ..."}</h5>
                      </div>
                      <div className="button-wrapper">
                        <Button
                        onClick={() => {
                          handleClick(recData.idMeal);
                        }}
                        className="card-button"
                        icon={
                          <RightOutlined />
                        }
                      >
                        See Recipe
                      </Button></div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      {visibleRecipes < recipeData.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button className="btn-see-more" onClick={handleSeeMore}>
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
