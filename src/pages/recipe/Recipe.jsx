import { Col } from "antd";
import Card from "antd/es/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipeIdData, setRecipeIdData] = useState([]);

  const fetchRecipeIdData = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId)
      .then((res) => {
        setRecipeIdData(res.data.meals);
        console.log(recipeIdData.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  useEffect(() => {
    fetchRecipeIdData();
  }, []);
  return (
    <div>
      {recipeIdData?.map((recData) => {
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
                <h3>Origin: {recData?.strArea}</h3>
                <h3>Tags: {recData?.strTags}</h3>
                <p>Instructions: {recData.strInstructions}}</p>
              </div>
            </Card>
          </Col>
        );
      })}
    </div>
  );
};

export default Recipe;
