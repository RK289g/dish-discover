import { Button, Col, Drawer, Row, Spin } from "antd";
import CuisinesType from "../../components/cuisinesType/CuisinesType";
import "./Recipes.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Recipes = () => {
  const [cuisineTypeName, setCuisineTypeName] = useState("American");
  const [CuisineTypes, setCuisineTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCuisineType = () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => {
        setCuisineTypes(response.data.meals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCuisineType();
  }, []);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="recipes-wrapper">
      {isLoading ? (
        <div className="recipes-spinner">
          <Spin fullscreen={true} size="large" />
        </div>
      ) : (
        <div className="recipe-inner-wrapper">
          <h1 className="header-text">Cuisines</h1>
          <div className="cuisine-row-column">
            <Row gutter={[10, 10]} align={"Middle"}>
              {CuisineTypes.map((cusineType, index) => (
                <Col
                  lg={3}
                  md={6}
                  key={index}
                  className="cuisine-column"
                  onClick={() => setCuisineTypeName(cusineType.strArea)}
                >
                  <Button className="btn-cuisine-name">
                    {cusineType.strArea}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <div className="action-button">
              <Button className="drawer-buttons" onClick={showDrawer}>
                Cuisines
              </Button>
            </div>
            <Drawer
              title="Cuisines"
              placement={"right"}
              closable={true}
              onClose={onClose}
              open={open}
              key={"right"}
              className="drawer-wrappers"
            >
              {CuisineTypes.map((cusineType, index) => (
                <div key={index} className="cuis" onClick={onClose}>
                  <Button
                    className="cuisine-titles"
                    onClick={() => setCuisineTypeName(cusineType.strArea)}
                  >
                    {cusineType.strArea}
                  </Button>
                </div>
              ))}
            </Drawer>
          </div>
          <CuisinesType cuisineTypeName={cuisineTypeName} />
        </div>
      )}
    </div>
  );
};

export default Recipes;
