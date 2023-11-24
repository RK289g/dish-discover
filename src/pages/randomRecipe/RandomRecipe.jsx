import axios from "axios";
import { useState } from "react";
import "./RandomRecipe.css";

const randomRecipe = () => {
  const [recipeData, setRecipeData] = useState();

  const fetchRandomRecipe = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setRecipeData(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  return (
    <div>
      <div className="btn-get-recipe-wrapper">
        <button className="btn-get-recipe" onClick={() => fetchRandomRecipe()}>
          Get Random Recipe
        </button>
      </div>
      {recipeData?.map((recData) => {
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
              <h2>Ingredients</h2>

              <table>
                {[...Array(20)].map((_, index) => {
                  const ingredientKey = `strIngredient${index + 1}`;
                  const measureKey = `strMeasure${index + 1}`;

                  // Check if both strIngredient and strMeasure have values
                  if (recData[ingredientKey]) {
                    return (
                      <tr key={index}>
                        <td>{recData[ingredientKey]}</td>
                        <td>{recData[measureKey]}</td>
                      </tr>
                    );
                  }

                  return null; // If either strIngredient or strMeasure is null, skip rendering the row
                })}
              </table>
            </div>
            <div className="instruction-div">
              <h3>Instructions</h3>
              {/* <p>{recData?.strInstructions}</p> */}
              {recData?.strInstructions
                .split("\r\n\r\n")
                .map((instruction, index) => (
                  <p key={index}>
                    <span>Step-{index + 1}: </span>
                    {instruction}
                  </p>
                ))}
            </div>

            <div className="YT-wrapper">
              <h3>Watch Video</h3>
              <iframe
                width="1200"
                height="700"
                src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                  recData?.strYoutube
                )}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h4>Video on {recData?.strMeal}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getYoutubeVideoId = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match && match[1];
};

export default randomRecipe;
