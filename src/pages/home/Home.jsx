import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import "./Home.css";
import Card from "antd/es/card/Card";
import { Col, Row, Button } from "antd"; // Import Button from antd
import { useNavigate } from "react-router-dom";

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
    navigate(`/recipe/${recipeId}`);
  };

  const handleSeeMore = () => {
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 4);
  };

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="home-wrapper">
        <h1 className="popular-recipe">Popular Recipe</h1>
        <div className="card-wrapper">
          <Row gutter={[40, 16]} style={{ margin: "0px", padding: "0px 10px" }}>
            {recipeData?.slice(0, visibleRecipes).map((recData) => (
              <Col lg={8} xs={24} sm={12} md={12} key={recData?.idMeal}>
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
                      </div>
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