import { useEffect, useState } from "react";
import "./Area.css";
import { useNavigate } from "react-router-dom";

import imgAmerican from "../../assets/cusine-images/american.jpg";
import imgBritish from "../../assets/cusine-images/british.jpg";
import imgCanadian from "../../assets/cusine-images/canada.jpg";
import imgChina from "../../assets/cusine-images/china.jpg";
import imgTurkish from "../../assets/cusine-images/turkish.jpg";
import imgItalian from "../../assets/cusine-images/Italian.jpg";
import imgEgyptian from "../../assets/cusine-images/Egyptian.jpg";
import imgFrench from "../../assets/cusine-images/french.jpg";
import imgIndian from "../../assets/cusine-images/indian.jpg";
import imgDutch from "../../assets/cusine-images/dutch.jpg";
import imgMexican from "../../assets/cusine-images/mexican.jpg";
import imgThai from "../../assets/cusine-images/thai.jpg";
import { Card, Col, Row } from "antd";
import axios from "axios";

const Area = () => {
  const [cuisineData, setCuisineData] = useState([]);
  const navigate = useNavigate();

  const fetchCuisineRecipes = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
      .then((res) => {
        setCuisineData(res.data.meals);
        console.log(setCuisineData.meals[0]);
        // console.log(recipeData.meals[1]);
        // console.log(recipeData.meals[2]);
        // console.log(recipeData.meals[3]);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };
  useEffect(() => {
    fetchCuisineRecipes();
  }, []);

  const handleCuisineClick = (recipeId) => {
    console.log(recipeId);
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <h1 className="top-text">Cuisines</h1>
      <div style={{ background: "#ECECEC", padding: "10px" }}>
        <Row>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgAmerican} alt="" />
              <p className="cuisine-text">American</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgBritish} alt="" />
              <p className="cuisine-text">British</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgCanadian} alt="" />
              <p className="cuisine-text">Canadian</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgChina} alt="" />
              <p className="cuisine-text">Chinese</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgTurkish} alt="" />
              <p className="cuisine-text">Turkish</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgFrench} alt="" />
              <p className="cuisine-text">French</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgIndian} alt="" />
              <p className="cuisine-text">Indian</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgThai} alt="" />
              <p className="cuisine-text">Thai</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgItalian} alt="" />
              <p className="cuisine-text">Italian</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgMexican} alt="" />
              <p className="cuisine-text">Mexican</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgEgyptian} alt="" />
              <p className="cuisine-text">Egyptian</p>
            </div>
          </Col>
          <Col className="cuisine-column" span={2}>
            <div className="cuisine-container">
              <img className="cuisine-img" src={imgDutch} alt="" />
              <p className="cuisine-text">Dutch</p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
      <h1 className="top-text">American</h1>
        <Row gutter={50} style={{ margin: "0px", padding: "0px 300px" }}>
          {cuisineData?.map((recData) => {
            return (
              <Col span={8} key={recData?.idMeal}>
                <Card
                  onClick={() => {
                    handleCuisineClick(recData.idMeal);
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
                      {/* <div className="text-btn-wrapper">
                      <p>Category: {recData?.strCategory}</p>
                      <Button
                        className="btn-main"
                        type="primary"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        onClick={() => {
                          handleClick(recData.idMeal);
                        }}
                      >
                        view full recipe
                      </Button>
                    </div> */}
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Area;
