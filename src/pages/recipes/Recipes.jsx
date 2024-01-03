import { Button, Drawer } from "antd";
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
        <div className="cuisine-rows">
          {typeData.map((type) => (
            <div key={type.id} className="cuisine-column">
              <div
                className="cuisine-container"
                onClick={() => setTypeName(type.name)}
              >
                <img className="cuisine-img" src={type.image} alt={type.name} />
                <p className="cuisine-titles">{type.name}</p>
              </div>
            </div>
          ))}
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
