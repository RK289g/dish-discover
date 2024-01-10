import { useState } from "react";
import "./Ingredients.css";
import { ingredientData } from "./IngredientData";
import { Button, Col, Drawer, Row } from "antd";
import IngredientType from "../../components/ingredientType/InggredientType";

const Ingredient = () => {
  const [IngredientName, setIngredientName] = useState("Salmon");

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
        <h1 className="category-title">Ingredients</h1>
        <div className="category-row-column">
          <Row gutter={[10, 10]} align={"Middle"}>
            {ingredientData.map((type) => (
              <Col
                lg={3}
                md={4}
                key={type.id}
                className="category-column"
                onClick={() => setIngredientName(type.name)}
              >
                <Button className="btn-category-name">{type.name}</Button>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <div className="action-button">
            <Button className="drawer-buttons" onClick={showDrawer}>
           Ingredients
            </Button>
          </div>
          <Drawer
            title="Ingredient"
            placement={"right"}
            closable={true}
            onClose={onClose}
            open={open}
            key={"right"}
            className="drawer-wrappers"
          >
            {ingredientData.map((type) => (
              <div key={type.id} className="cuis" onClick={onClose}>
                <Button
                  className="cuisine-titles"
                //   onClick={() => setIngredientName(type.name)}
                >
                  {type.name}
                </Button>
              </div>
            ))}
          </Drawer>
        </div>
        <IngredientType typeName={IngredientName} />
      </div>
    </div>
  );
};

export default Ingredient;
