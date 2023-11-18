import "./Recipe.css";
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
          <div className="wrapper" key={recData?.idMeal}>
            <div className="recipe-top">
              <div className="top-text">
                <h1>{recData?.strMeal}</h1>
                <h3>
                  Origin: <span>{recData?.strArea}</span>
                </h3>
                <h3>
                  Tags: <span>{recData?.strTags}</span>
                </h3>
                <h3>
                  Category: <span>{recData?.strCategory}</span>
                </h3>
              </div>
              <div className="image-wrapper">
                <img
                  className="image"
                  src={recData?.strMealThumb}
                  alt="ThumbNail"
                />
              </div>
            </div>
            <div className="table-div">
              <h3>Ingredient</h3>
              <table>
                <tr>
                  <td>{recData?.strIngredient1}</td>
                  <td>{recData?.strMeasure1}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient2}</td>
                  <td>{recData?.strMeasure2}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient3}</td>
                  <td>{recData?.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient4}</td>
                  <td>{recData?.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient5}</td>
                  <td>{recData?.strMeasure5}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient6}</td>
                  <td>{recData?.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient7}</td>
                  <td>{recData?.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient8}</td>
                  <td>{recData?.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient9}</td>
                  <td>{recData?.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient10}</td>
                  <td>{recData?.strMeasure10}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient11}</td>
                  <td>{recData?.strMeasure11}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient12}</td>
                  <td>{recData?.strMeasure12}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient13}</td>
                  <td>{recData?.strMeasure13}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient14}</td>
                  <td>{recData?.strMeasure14}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient15}</td>
                  <td>{recData?.strMeasure15}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient16}</td>
                  <td>{recData?.strMeasure16}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient17}</td>
                  <td>{recData?.strMeasure17}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient18}</td>
                  <td>{recData?.strMeasure18}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient19}</td>
                  <td>{recData?.strMeasure19}</td>
                </tr>
                <tr>
                  <td>{recData?.strIngredient20}</td>
                  <td>{recData?.strMeasure20}</td>
                </tr>
              </table>
            </div>
            <div className="instruction-div">
              <h3>Instruction</h3>
              <p>{recData?.strInstructions}</p>
            </div>
            <div className="YT-div">
              <h3>Youtube</h3>
              <div className="YT-wrapper">
                <iframe
                  width="1200"
                  height="700"
                  src={recData?.strYoutube}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <h3>{recData?.strYoutube}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
