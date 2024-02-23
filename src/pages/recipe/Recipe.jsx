import { Col, Collapse, Divider, Image, Row } from "antd";
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
  StarOutlined,
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
            <Row gutter={[80, 80]} className="inner-wrapper">
              <Col xs={24} md={12} lg={12} align="middle">
                <div className="image-wrapper">
                  <Image
                    preview={false}
                    className="image-class"
                    src={recData?.strMealThumb}
                    alt="ThumbNail"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="recipe-text-inner-wrapper">
                  <h1 className="recipe-title font-inter">
                    {recData?.strMeal}
                  </h1>
                  <p className="recipe-text font-inter">
                    Cuisine: {recData?.strArea}
                  </p>
                  {recData?.strTags && (
                    <p className="recipe-text">Features: {recData?.strTags}</p>
                  )}
                  <div className="icons font-inter">
                    <div className="icons-wrapper-left">
                      <HeartOutlined /> <h5>12 Likes</h5>
                    </div>
                    <div className="icons-wrapper-left">
                      <CommentOutlined /> <h5>48 Comments</h5>
                    </div>
                    <div className="icons-wrapper-right">
                      <ShareAltOutlined /> <h5>Share</h5>
                    </div>
                    <div className="icons-wrapper-right">
                      <SaveOutlined /> <h5>Save</h5>
                    </div>
                  </div>
                  <div className="rating-wrapper">
                    <h3 className="rating-icons font-inter">Average Ratings</h3>
                    <StarFilled className="rating-icon-color"/>
                    <StarFilled className="rating-icon-color"/>
                    <StarFilled className="rating-icon-color"/>
                    <StarFilled className="rating-icon-color"/>
                    <StarOutlined className="rating-icon-color"/>
                  </div>
                  <div className="rating-wrapper">
                    <div className="rating-inner-wrapper">
                      <h1 className="recipe-title font-inter">20</h1>
                      <p className="rating-text font-inter">Ingredients</p>
                    </div>
                    <Divider type="vertical" className="rating-divider" />
                    <div className="rating-inner-wrapper">
                      <h1 className="recipe-title font-inter">10</h1>
                      <p className="rating-text font-inter">Minutes</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={24} md={12}>
                <h1>Ingredients</h1>
              </Col>
              <Col xs={24} md={12} className="instruction-div">
                <h1>Instructions</h1>
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
              </Col>
            </Row>

            <div span={24} className="YT-wrapper">
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
