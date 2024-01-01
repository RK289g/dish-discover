import CuisinesType from "../../components/cuisinesType/CuisinesType";
import "./Recipes.css";
import { typeData } from "./typeData";
import { useState } from "react";

const Recipes = () => {
  const [typeName, setTypeName] = useState("American");

  return (
    <div className="recipes-wrapper">
      <div className="recipe-inner-wrapper">
        <h1 className="header-text">Cuisines</h1>
        <div className="cuisine-row">
          {typeData.map((type) => (
            <div key={type.id} className="cuisine-column">
              <div
                className="cuisine-container"
                onClick={() => setTypeName(type.name)}
              >
                <img className="cuisine-img" src={type.image} alt={type.name} />
                <p className="cuisine-title">{type.name}</p>
              </div>
            </div>
          ))}
        </div>
        <CuisinesType typeName={typeName} />
      </div>
    </div>
  );
};

export default Recipes;
