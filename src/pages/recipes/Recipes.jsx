import { Button, Col, Drawer, Row } from "antd";
import CuisinesType from "../../components/cuisinesType/CuisinesType";
import "./Recipes.css";
import { typeData } from "./typeData";
import { useState } from "react";

const Recipes = () => {
  const [typeName, setTypeName] = useState("American");

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="recipes-wrapper">
      <div className="recipe-inner-wrapper">
        <h1 className="header-text">Cuisines</h1>
        <div className="cuisine-row-column">
          <Row gutter={[10, 10]} align={"Middle"}>
            {typeData.map((type) => (
              <Col
                lg={3}
                md={6}
                key={type.id}
                className="cuisine-column"
                onClick={() => setTypeName(type.name)}
              >
                <Button className="btn-cuisine-name">{type.name}</Button>
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
            {typeData.map((type) => (
              <div key={type.id} className="cuis" onClick={onClose}>
                {/* <img
                    className="cuisine-img"
                    src={type.image}
                    alt={type.name}
                  /> */}
                <Button
                  className="cuisine-titles"
                  onClick={() => setTypeName(type.name)}
                >
                  {type.name}
                </Button>
              </div>
            ))}
          </Drawer>
        </div>
        <CuisinesType typeName={typeName} />
      </div>
    </div>
  );
};

export default Recipes;
