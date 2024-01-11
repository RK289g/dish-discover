import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Card, Col, Image, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";


const AtoZType = ({ typeName }) => {
  const [aToZTypeData, setAToZTypeData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchaToZRecipes = async () => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${typeName}`)
      .then((res) => {
        setAToZTypeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchaToZRecipes();
  }, [typeName]);

  const handleaToZClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="cuisines-type-wrapper">
      <h1 className="type-header-text">
        Recipe for Letter- <span>{typeName}</span>
      </h1>

      <Row gutter={50} style={{ margin: "0px", padding: "0px 20px" }}>
        {aToZTypeData?.map((recData) => {
          return (
            <Col xl={8} md={12} sm={24} key={recData?.idMeal}>
              <Card
                onClick={() => {
                  handleaToZClick(recData.idMeal);
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

AtoZType.propTypes = {
  typeName: PropTypes.string.isRequired,
};

export default AtoZType;
