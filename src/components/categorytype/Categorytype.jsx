import { useEffect, useState } from "react";
import "./CategoryType.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Card, Col, Image, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

const CategoryType = ({ typeName }) => {
  const [cuisineData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchCategoryRecipes = async () => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeName}`)
      .then((res) => {
        setCategoryData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoryRecipes();
  }, [typeName]);

  const handleCategoryClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="cuisines-type-wrapper">
      <h1 className="type-header-text">
        Cuisines Type: <span>{typeName}</span>
      </h1>

      <Row gutter={50} style={{ margin: "0px", padding: "0px 20px" }}>
        {cuisineData?.map((recData) => {
          return (
            <Col xl={8} md={12} sm={24} key={recData?.idMeal}>
              <Card
                onClick={() => {
                  handleCategoryClick(recData.idMeal);
                }}
                hoverable
                className="card"
              >
                <Skeleton
                  active={true}
                  loading={isLoading}
                  avatar={{ shape: "square", size: 350 }}
                >
                  <div>
                    <Image
                      className="image"
                      src={recData?.strMealThumb}
                      alt="ThumbNail"
                      preview={false}
                    />
                    <div className="card-text recipe-card-text">
                      <h1>{recData?.strMeal}</h1>
                    </div>
                  </div>
                </Skeleton>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

CategoryType.propTypes = {
  typeName: PropTypes.string.isRequired,
};

export default CategoryType;
