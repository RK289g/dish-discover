import { useState, useEffect } from "react";
import "./Ingredients.css";
import { Select } from "antd";
import IngredientType from "../../components/ingredientType/InggredientType";
import axios from "axios";

const Ingredient = () => {
  const [ingredientType, setIngredientType] = useState([]);
  const [ingredientName, setIngredientName] = useState("Salmon");

  const fetchIngredientType = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        setIngredientType(response.data.meals);
        // console.log(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
      });
  };

  useEffect(() => {
    fetchIngredientType();
  }, []);

  

  return (
    <div className="category-wrapper">
      <div className="category-inner-wrapper ingredient-inner-wrapper">
        <h1 className="ingredient-title">Ingredients</h1>
        <div className="ingredient-row-column">
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Select ingredients"
            optionFilterProp="children"
            
            onChange={(value) => setIngredientName(value)}
          >
            {ingredientType.map((type) => (
              <Select.Option key={type.idIngredient} value={type.strIngredient}>
                {type.strIngredient}
              </Select.Option>
            ))}
          </Select>
        </div>
        <IngredientType typeName={ingredientName} />
      </div>
    </div>
  );
};

export default Ingredient;
