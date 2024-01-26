import axios from "axios";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { Button, Col, Collapse, Input, Row, Tag } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import RecipeCard from "../../components/common/recipe-card/RecipeCard";

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);

  const [CuisineTypes, setCuisineTypes] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  const fetchCategoryRecipes = async (categoryTypeName) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTypeName}`
      )
      .then((res) => {
        setRecipeData(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  const fetchCuisineRecipes = async (cuisineTypeName) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisineTypeName}`
      )
      .then((res) => {
        setRecipeData(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  const fetchSearchByName = async () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
      )
      .then((res) => {
        console.log(res.data.meals, "res.data.meals");
        setRecipeData(res.data.meals);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
      });
  };

  const fetchCategoryType = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        setCategoryTypes(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
      });
  };

  const fetchCuisineType = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => {
        setCuisineTypes(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
      });
  };

  useEffect(() => {
    fetchSearchByName();
    fetchCuisineType();
    fetchCategoryType();
  }, []);

  useEffect(() => {
    fetchSearchByName();
  }, [searchByName]);

  const panelStyle = {
    marginBottom: 24,
    background: "white",
    borderRadius: 5,
    border: "1px solid gray",
  };

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: "Cuisines",
      children: (
        <div className="tags-wrapper">
          {CuisineTypes.map((cusineType, index) => (
            <Tag
              key={index}
              className="cuisine-column"
              onClick={() => fetchCuisineRecipes(cusineType?.strArea)}
            >
              <Button className="btn-cuisine-name">
                {cusineType?.strArea}
              </Button>
            </Tag>
          ))}
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "Categories",
      children: (
        <div className="tags-wrapper">
          {categoryTypes.map((categoryType, index) => (
            <Tag
              key={index}
              className="cuisine-column"
              onClick={() => fetchCategoryRecipes(categoryType?.strCategory)}
            >
              <Button className="btn-cuisine-name">
                {categoryType?.strCategory}
              </Button>
            </Tag>
          ))}
        </div>
      ),
      style: panelStyle,
    },
  ];

  return (
    <div className="recipes-wrapper">
      <div className="recipes-banner"></div>
      <div className="recipes-inner-wrapper">
        <Input
          size="large"
          placeholder="Search Recipes"
          className="recipes-search"
          onChange={(ev) => setSearchByName(ev.target.value)}
        />

        <div className="recipes-layout">
          <Row>
            <Col span={8}>
              <div className="cuisines-section">
                <h1 className="header-text">Decide What To Write</h1>
                <Collapse
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  items={getItems(panelStyle)}
                />
              </div>
            </Col>
            <Col span={16}>
              <RecipeCard recipeData={recipeData} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
