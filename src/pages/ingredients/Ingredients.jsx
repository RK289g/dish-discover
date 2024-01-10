import { useState } from "react";
import "./Ingredients.css";
import { ingredientData } from "./IngredientData";
import { Select } from "antd";
import IngredientType from "../../components/ingredientType/InggredientType";

const Ingredient = () => {
  const [ingredientName, setIngredientName] = useState("Salmon");

  const handleSearch = (inputValue, option) =>
    (option.label ?? "").toLowerCase().includes(inputValue.toLowerCase());

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
            filterOption={handleSearch}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            onChange={(value) => setIngredientName(value)}
            onSearch={(inputValue) => setIngredientName(inputValue)}
            options={ingredientData.map((type) => ({
              value: type.name,
              label: type.name,
            }))}
          />
        </div>
        <IngredientType typeName={ingredientName} />
      </div>
    </div>
  );
};

export default Ingredient;
