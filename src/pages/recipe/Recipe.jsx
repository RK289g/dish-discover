import { Image } from "antd";
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
        console.log(res.data.meals, " helloooo");
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
            <div className="inner-wrapper">
              <div className="recipe-top">
                <div className="image-wrapper">
                  <Image
                    preview={false}
                    className="image"
                    src={recData?.strMealThumb}
                    alt="ThumbNail"
                  />
                </div>
                <div className="top-text">
                  <h1>{recData?.strMeal}</h1>
                  <h3>
                    Cuisine: <span>{recData?.strArea}</span>
                  </h3>
                  {recData?.strTags && (
                    <h3>
                      Features: <span>{recData?.strTags}</span>
                    </h3>
                  )}

                  <h3>
                    Course: <span>{recData?.strCategory}</span>
                  </h3>
                </div>
              </div>
              <div className="table-div">
                <h2>Ingredients</h2>

                <table>
                  {[...Array(20)].map((_, index) => {
                    const ingredientKey = `strIngredient${index + 1}`;
                    const measureKey = `strMeasure${index + 1}`;
                    const ingredientImageSrc = `https://www.themealdb.com/images/ingredients/${recData[ingredientKey]}-small.png`;

                    if (recData[ingredientKey]) {
                      return (
                        <tr key={index}>
                          <td>
                            <Image
                              src={ingredientImageSrc}
                              preview={false}
                              height={50}
                            />
                          </td>
                          <td>{recData[ingredientKey]}</td>
                          <td>{recData[measureKey]}</td>
                        </tr>
                      );
                    }

                    return null;
                  })}
                </table>
              </div>
              <div className="instruction-div">
                <h3>Instructions</h3>
                <ul>
                  {recData?.strInstructions
                    .split("\r\n\r\n")
                    .map((instruction, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <p>Step {index + 1}</p>
                        <li>{instruction}</li>
                      </div>
                    ))}
                </ul>
              </div>

              <div className="YT-wrapper">
                <h3>Watch Video</h3>
                <iframe
                  className="i-frame"
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

export default Recipe;
