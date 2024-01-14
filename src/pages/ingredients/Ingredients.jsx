import { useState } from "react";
import "./Ingredients.css";
import { Select } from "antd";
import IngredientType from "../../components/ingredientType/InggredientType";
import axios from "axios";

const Ingredient = () => {
  const [ingredientType, setIngredientType] = useState([]);
  const [ingredientName, setIngredientName] = useState("Salmon");

  const fetchIngredientType = async () => {
    // setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setIngredientType(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  fetchIngredientType();
 

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
            options={ingredientType.map((type) => ({
              value: type.strIngredient,
            }))}
          />
        </div>
        <IngredientType typeName={ingredientName} />
      </div>
    </div>
  );
};

export default Ingredient;
