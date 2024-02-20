import { Collapse, Divider, Image } from "antd";
import "./Recipe.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bannerFinal from "../../assets/banner/banner-final.jpg";
import {
  CommentOutlined,
  HeartOutlined,
  SaveOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

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
      <div className="recipes-banner">
        <Image className="banner-img" preview={false} src={bannerFinal} />
      </div>
      <div className="breadcrumb-wrapper">
        <h3>Breadcrumb</h3>
      </div>
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
                <div>
                  <div className="recipe-text-inner-wrapper">
                    <h1 className="recipe-title font-inter">
                      {recData?.strMeal}
                    </h1>
                    <p className="recipe-text font-inter">
                      Cuisine: {recData?.strArea}
                    </p>
                    {recData?.strTags && (
                      <p className="recipe-text">
                        Features: {recData?.strTags}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="icons">
                      <div className="icons-wrapper-left">
                        <HeartOutlined />
                      </div>
                      <div className="icons-wrapper-left">
                        <CommentOutlined />
                      </div>
                      <div className="icons-wrapper-right">
                        <ShareAltOutlined />
                      </div>
                      <div className="icons-wrapper-right">
                        <SaveOutlined />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="rating-wrapper">
                      <h3 className="recipe-text font-inter">
                        Average Ratings
                      </h3>
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                    </div>
                    <div className="rating-wrapper">
                      <div>
                        <h1 className="recipe-title font-inter">20</h1>
                        <p className="recipe-text font inter">Ingredients</p>
                      </div>
                      <Divider type="vertical" className="rating-divider" />
                      <div>
                        <h1 className="recipe-title font-inter">10</h1>
                        <p className="recipe-text font-inter">Minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="instruction-div">
                <h1>instructions</h1>

                <Collapse>
                  {recData?.strInstructions
                    .split(/\r?\n/)
                    .filter((instruction) => instruction.trim() !== "") // Remove empty instructions
                    .map((instruction, index) => (
                      <CollapsePanel
                        header={`STEP ${index + 1}`}
                        key={index + 1}
                      >
                        <p className="instruction-text font-inter">{instruction}</p>
                      </CollapsePanel>
                    ))}
                </Collapse>
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
    /(?:youtu\.be|youtube\.com(?:[^]+.+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be)([^"&?\s]{11})/
  );
  return match && match[1];
};

export default Recipe;
