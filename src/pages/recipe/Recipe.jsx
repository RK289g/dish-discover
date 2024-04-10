import { Col, Collapse, Image } from "antd";
import "./Recipe.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bannerFinal from "../../assets/banner/banner-final.jpg";
import { CheckCircleOutlined } from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import CommentSection from "../../components/comment-sectuon/CommentSection";
import { CustomBreadcrumb } from "../../components/common/custom-breadcrumb/CustomBreadcrumb";
import RecipeHeader from "../../components/recipe-header/RecipeHeader";

const Recipe = () => {
  const { recipeId } = useParams();
  // console.log(recipeId);
  const [recipeIdData, setRecipeIdData] = useState([]);

  const fetchRecipeIdData = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId)
      .then((res) => {
        setRecipeIdData(res.data.meals);
        // console.log(res.data.meals[0].strMeal, " helloooo");
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  useEffect(() => {
    fetchRecipeIdData();
  }, [recipeId]);

  return (
    <div className="wrapper">
      <div className="recipes-banner">
        <Image className="banner-img" preview={false} src={bannerFinal} />
      </div>
      <div className="inner-wrapper">
        <div className="breadcrumb-wrapper">
          <CustomBreadcrumb title={recipeIdData[0]?.strMeal} />
        </div>
        {recipeIdData?.map((recData) => {
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
                  <h1 className="instruction-header font-inter">Ingredients</h1>
                  <table className="table-wrapper">
                    {[...Array(20)].map((_, index) => {
                      const ingredientKey = `strIngredient${index + 1}`;
                      const measureKey = `strMeasure${index + 1}`;
                      // const ingredientImageSrc = `https://www.themealdb.com/images/ingredients/${recData[ingredientKey]}-small.png`;

                      if (recData[ingredientKey]) {
                        return (
                          <tr key={index} className="table-row">
                            <td className="td-ingredient-wrapper">
                              <div className="td-ingredient">
                                <CheckCircleOutlined
                                  hoverable
                                  className="check-icon"
                                />
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
                        .filter((instruction) => instruction.trim() !== "")
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
        <CommentSection />
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

export default Recipe;
