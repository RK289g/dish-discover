import CuisinesType from "../../components/cuisinesType/CuisinesType";
import "./Recipes.css";
import { Col, Row } from "antd";
import { typeData } from "./typeData";
import { useState } from "react";

const Recipes = () => {
  const [typeName, setTypeName] = useState("American");

  return (
    <div className="recipes-wrapper">
      <h1 className="header-text">Cuisines</h1>

      <Row>
        {typeData.map((type) => (
          <Col key={type.id} className="cuisine-column" span={2}>
            <div
              className="cuisine-container"
              onClick={() => setTypeName(type.name)}
            >
              <img className="cuisine-img" src={type.image} alt={type.name} />
              <p className="cuisine-title">{type.name}</p>
            </div>
          </Col>
        ))}
      </Row>
      <CuisinesType typeName={typeName} />
    </div>
  );
};

export default Recipes;
