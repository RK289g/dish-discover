import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import "./Home.css";
import Card from "antd/es/card/Card";
import { Col, Row } from "antd";
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
      <Row gutter={50} style={{ margin: "0px", padding: "0px 300px" }}>
        {recipeData?.map((recData) => {
          return (
            <Col span={8} key={recData?.idMeal}>
              <Card
                onClick={() => {
                  handleClick(recData.idMeal);
                }}
                hoverable
                className="card"
              >
                <div>
                  <img
                    className="image"
                    src={recData?.strMealThumb}
                    alt="ThumbNail"
                  />
                  <div className="card-text">
                    <h1>{recData?.strMeal}</h1>
                    <div className="text-btn-wrapper">
                      <p>Category: {recData?.strCategory}</p>
                      {/* <Button
                        className="btn-main"
                        type="primary"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        onClick={() => {
                          handleClick(recData.idMeal);
                        }}
                      >
                        view full recipe
                      </Button> */}
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
