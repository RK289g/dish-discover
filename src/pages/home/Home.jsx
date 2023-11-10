import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import "./Home.css";
import {
  FieldTimeOutlined,
  FireFilled,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import Card from "antd/es/card/Card";
import { Col, Row } from "antd";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  const fetchRecipe = async () => {
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
    fetchRecipe();
  }, []);

  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <Row gutter={20} className="card-wrapper">
        {recipeData?.map((recData) => {
          return (
            <Card className="card" key={recData?.idMeal}>
              <div className="image-wrapper">
                <img
                  className="image"
                  src={recData?.strMealThumb}
                  alt="ThumbNail"
                />
              </div>
              <div className="card-text">
                <h1>{recData?.strMeal}</h1>
                <div>
                  <div className="star">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="timer-calory">
                    <div className="timer">
                      <FieldTimeOutlined />
                      <p>45 min</p>
                    </div>
                    <div className="calory">
                      <FireFilled />
                      <p>325 Calories</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
