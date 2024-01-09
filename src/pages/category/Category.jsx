import { useState } from "react";
import "./Category.css";
import { categoryTypeData } from "./categoryTypeData";
import { Button, Col, Drawer, Row } from "antd";
import CategoryType from "../../components/categorytype/Categorytype";

const Category = () => {
  const [categoryName, setCategoryName] = useState("Chicken");

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="category-wrapper">
      <div className="category-inner-wrapper">
        <h1 className="category-title">Categories</h1>
        <div className="category-row-column">
          <Row gutter={[10, 10]} align={"Middle"}>
            {categoryTypeData.map((type) => (
              <Col
                lg={4}
                md={6}
                key={type.id}
                className="category-column"
                onClick={() => setCategoryName(type.name)}
              >
                <Button className="btn-category-name">{type.name}</Button>
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
            {categoryTypeData.map((type) => (
              <div key={type.id} className="cuis" onClick={onClose}>
                <Button
                  className="cuisine-titles"
                  onClick={() => setCategoryName(type.name)}
                >
                  {type.name}
                </Button>
              </div>
            ))}
          </Drawer>
        </div>
        <CategoryType typeName={categoryName} />
      </div>
    </div>
  );
};

export default Category;
