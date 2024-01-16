import { useEffect, useState } from "react";
import "./Category.css";
import { Button, Col, Drawer, Row, Spin } from "antd";
import CategoryType from "../../components/categorytype/Categorytype";
import axios from "axios";

const Category = () => {
  const [categoryName, setCategoryName] = useState("Chicken");
  const [categoryType, setCategoryType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategoryType = () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        setCategoryType(response.data.meals);
        console.log(response.data.meals);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCategoryType();
  }, []);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="category-wrapper">
      {isLoading ? (
        <div className="category-spinner">
          <Spin fullscreen={true} size="large" />
        </div>
      ) : (
        <div className="category-inner-wrapper">
          <h1 className="category-title">Categories</h1>
          <div className="category-row-column">
            <Row gutter={[10, 10]} align={"Middle"}>
              {categoryType.map((categoryType, index) => (
                <Col
                  lg={4}
                  md={6}
                  key={index}
                  className="category-column"
                  onClick={() => setCategoryName(categoryType.strCategory)}
                >
                  <Button className="btn-category-name">
                    {categoryType.strCategory}
                  </Button>
                </Col>
              ))}
            </Row>
          </div>

          <div>
            <div className="action-button">
              <Button className="drawer-buttons" onClick={showDrawer}>
                Categories
              </Button>
            </div>
            <Drawer
              title="Categories"
              placement={"right"}
              closable={true}
              onClose={onClose}
              open={open}
              key={"right"}
              className="drawer-wrappers"
            >
              {categoryType.map((categoryType, index) => (
                <div key={index} className="cuis" onClick={onClose}>
                  <Button
                    className="cuisine-titles"
                    onClick={() => setCategoryName(categoryType.strCategory)}
                  >
                    {categoryType.strCategory}
                  </Button>
                </div>
              ))}
            </Drawer>
          </div>
          <CategoryType categoryName={categoryName} />
        </div>
      )}
    </div>
  );
};

export default Category;
