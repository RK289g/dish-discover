import { RightOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Spin, Image } from "antd";
import axios from "axios";
import "./FeaturedRecipe.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        setRecipeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
        duration: 0.2,
        transitionProperty: "easeIn",
      },
    }),
  };

  return (
    <div className="featured-recipe-wrapper">
      <h1 className="featured-recipe-title font-fanlste">Featured Recipes</h1>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <div>
            <Spin size="large" />
          </div>
        ) : (
          recipeData?.slice(0, 6).map((recData, index) => (
            <Col xl={8} lg={12} sm={24} key={recData?.idMeal}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
              >
                <Card hoverable className="card">
                  <div>
                    <Image
                      className="image"
                      src={recData?.strMealThumb}
                      alt="ThumbNail"
                      preview={false}
                    />
                    <div className="card-text">
                      <div className="card-text-category-likes-wrapper">
                        <div className="card-text-category">
                          <p className="font-inter">{recData?.strCategory}</p>
                        </div>
                        <div className="card-text-likes font-inter">
                          <HeartOutlined className="card-text-likes-icon" />
                          <p>12k likes</p>
                        </div>
                      </div>
                      <h1 className="card-text-title font-inter">
                        {recData?.strMeal && recData.strMeal.length > 18
                          ? recData.strMeal.substring(0, 20) + " ..."
                          : recData.strMeal}
                      </h1>
                      <h5 className="card-instruction-text font-inter ">
                        {recData?.strInstructions.substring(0, 90) + " ..."}
                      </h5>

                      <div className="button-wrapper">
                        <Button
                          onClick={() => {
                            handleClick(recData.idMeal);
                          }}
                          className="card-button"
                          icon={<RightOutlined />}
                        >
                          See Recipe
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default FeaturedRecipe;
