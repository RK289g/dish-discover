import axios from "axios";
import { useState } from "react";
import "./RandomRecipe.css";
import { Button, Col, Collapse, Image, Spin, message } from "antd";
import TemplateImage from "../../assets/banner/randomRecipe.png";
import buttonVector from "../../assets/banner/Vector.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import RecipeHeader from "../../components/recipe-header/RecipeHeader";
import CommentSection from "../../components/comment-sectuon/CommentSection";

const RandomRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeClicked, setRecipeClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomRecipe = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setRecipeData(res.data.meals);
        setIsLoading(false);
        message.success(`${res?.data?.meals[0]?.strMeal} loaded`);
        console.log(res?.data?.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  return (
    <div className="btn-random-recipe-wrapper">
      <div>
        <div
          className={
            recipeClicked ? "random-recipe-hero-hidden" : "random-recipe-hero"
          }
        >
          <Image
            src={TemplateImage}
            preview={false}
            className="template-image"
          />
          <div className="random-recipe-button-wrapper">
            <Button
              className="random-recipe-button"
              icon={
                <Image
                  src={buttonVector}
                  preview={false}
                  className="button-vector"
                />
              }
              onClick={() => {
                fetchRandomRecipe();
                setRecipeClicked(true);
              }}
            >
              Get Random Recipe
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="spinner-wrapper">
            <Spin tip="Loading" size="large" />
          </div>
        ) : (
          <div>
            {recipeClicked && (
              <div className="random-recipe-button-clicked-wrapper">
                <Button
                  icon={
                    <Image
                      src={buttonVector}
                      preview={false}
                      className="button-vector"
                    />
                  }
                  className="random-recipe-button-clicked"
                  onClick={() => fetchRandomRecipe()}
                >
                  Get Random Recipe{" "}
                </Button>
              </div>
            )}

            <div className="wrapper">
              <div className="inner-wrapper">
                {recipeData?.map((recData) => {
                  return (
                    <div key={recData?.idMeal}>
                      <RecipeHeader
                        thumbnail={recData?.strMealThumb}
                        mealName={recData?.strMeal}
                        areaName={recData?.strArea}
                        tags={recData?.strTags}
                      />

                      <div className="table-instruction-wrapper">
                        <Col xs={24} md={12} className="table-div">
                          <h1 className="instruction-header font-inter">
                            Ingredients
                          </h1>
                          <table className="table-wrapper">
                            {[...Array(20)].map((_, index) => {
                              const ingredientKey = `strIngredient${index + 1}`;
                              const measureKey = `strMeasure${index + 1}`;
                              if (recData[ingredientKey]) {
                                return (
                                  <tr key={index} className="table-row">
                                    <td className="td-ingredient-wrapper">
                                      <div className="td-ingredient">
                                        <CheckCircleOutlined className="check-icon" />
                                        {recData[ingredientKey]}
                                      </div>
                                    </td>
                                    <td className="td-measure">
                                      {recData[measureKey]}
                                    </td>
                                  </tr>
                                );
                              }

                              return null;
                            })}
                          </table>
                        </Col>
                        <Col xs={24} md={12} className="instruction-div">
                          <h1 className="instruction-header font-inter">
                            Instructions
                          </h1>
                          <div>
                            <Collapse>
                              {recData?.strInstructions
                                .split(/\r?\n/)
                                .filter(
                                  (instruction) => instruction.trim() !== ""
                                )
                                .map((instruction, index) => (
                                  <CollapsePanel
                                    header={`STEP ${index + 1}`}
                                    key={index + 1}
                                  >
                                    <p className="instruction-text font-inter">
                                      {instruction}
                                    </p>
                                  </CollapsePanel>
                                ))}
                            </Collapse>
                          </div>
                        </Col>
                      </div>

                      <div span={24} className="YT-wrapper">
                        <h3 className="YT-header font-inter">
                          Watch Video on {recData?.strMeal}
                        </h3>
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
                      </div>
                    </div>
                  );
                })}
                {recipeClicked && <CommentSection />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const getYoutubeVideoId = (url) => {
  const match = url.match(
    /(?:youtu\.be|youtube\.com(?:[^]+.+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be)([^"&?\s]{11})/
  );
  return match && match[1];
};
export default RandomRecipe;
