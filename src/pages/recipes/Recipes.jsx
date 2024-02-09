import axios from "axios";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { Button, Col, Collapse, Image, Input, Row, Spin, Tag } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import RecipeCard from "../../components/common/recipe-card/RecipeCard";
import bannerFinal from "../../assets/banner/banner-final.jpg";
import noData from "../../assets/logo/Empty-bro.svg";
import { useLocation } from "react-router-dom";

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCusineActive, setIsCusineActive] = useState("");
  const [isCategoryActive, setIsCategoryActive] = useState("");

  const [CuisineTypes, setCuisineTypes] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  const CategoryLocation = useLocation();
  const { CategoryRecipeKey = "", CategoryRecipeIndex = "" } =
    CategoryLocation.state || {};

  const CuisineLocation = useLocation();
  const { recipeKey = "", recipeIndex = "" } = CuisineLocation.state || {};

  const [isCategoryDummy, setIsCategoryDummy] = useState(CategoryRecipeIndex);
  const [isCuisineDummy, setIsCuisineDummy] = useState(recipeIndex);

  const handleChange = (ev) => {
    setSearchByName(ev.target.value);
    setIsCategoryDummy(-1);
    setIsCuisineDummy(-1);
  };

  const fetchCategoryRecipes = async (categoryTypeName, index) => {
    setIsLoading(true);
    setIsCategoryActive(index);
    setIsCusineActive(-1);

    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTypeName}`
      )
      .then((res) => {
        setRecipeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  const fetchCuisineRecipes = async (cuisineTypeName, index) => {
    setIsLoading(true);
    setIsCusineActive(index);
    setIsCategoryActive(-1);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisineTypeName}`
      )
      .then((res) => {
        console.log(res.data.meals, "american");
        setRecipeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  const fetchSearchByName = async () => {
    setIsLoading(true);
    setIsCusineActive(-1);
    setIsCategoryActive(-1);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
      )
      .then((res) => {
        const response = res.data.meals;
        setRecipeData(response === null ? [] : response);
        setIsLoading(false);
      })
      .catch((err) => {
        setRecipeData([]);
        console.error("Error fetching tasks: ", err);
        isLoading(false);
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
        console.log(response.data.meals, "response.data.meals");
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
      });
  };

  useEffect(() => {
    console.log(recipeKey, "recipeKey");
    if (recipeKey) {
      console.log("kam korram ami");
      fetchCuisineRecipes(recipeKey, recipeIndex);
    } else if (CategoryRecipeKey && CategoryRecipeIndex) {
      fetchCategoryRecipes(CategoryRecipeKey, CategoryRecipeIndex);
    } else {
      fetchSearchByName();
    }
  }, [recipeKey, recipeIndex]);

  // useEffect(() => {
  //   if (CategoryRecipeKey && CategoryRecipeIndex) {
  //     console.log("first useeffect");
  //     fetchCategoryRecipes(CategoryRecipeKey, CategoryRecipeIndex);
  //   } else {
  //     console.log("second useeffect");
  //     fetchSearchByName();
  //   }
  // }, [CategoryRecipeKey, CategoryRecipeIndex]);

  useEffect(() => {
    fetchCuisineType();
    fetchCategoryType();
  }, []);

  useEffect(() => {
    if (isCategoryDummy < 0 || isCuisineDummy < 0) {
      console.log("last effect");
      fetchSearchByName();
    }
  }, [searchByName]);

  // useEffect(() => {
  //   if (isCuisineDummy < 0) fetchSearchByName();
  //   console.log("sercfhjoant");
  // }, [searchByName]);

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
              onClick={() => fetchCuisineRecipes(cusineType?.strArea, index)}
            >
              <Button
                className={
                  index === isCusineActive
                    ? "btn-active-cuisine-name"
                    : "btn-cuisine-name"
                }
              >
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
              onClick={() =>
                fetchCategoryRecipes(categoryType?.strCategory, index)
              }
            >
              <Button
                className={
                  index === isCategoryActive
                    ? "btn-active-cuisine-name"
                    : "btn-cuisine-name"
                }
              >
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
      <div className="recipes-banner">
        <Image className="banner-img" preview={false} src={bannerFinal} />
        <Input
          size="large"
          placeholder="Search Recipes"
          className="recipes-search"
          onChange={handleChange}
          style={{ position: "absolute", top: "50%" }}
        />
      </div>
      <div className="recipes-inner-wrapper">
        <div className="recipes-layout">
          <Row>
            <Col span={8}>
              <div className="cuisines-section">
                <h1 className="header-text">Decide What To Write</h1>
                <Collapse
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isCusineActive }) => (
                    <CaretRightOutlined rotate={isCusineActive ? 90 : 0} />
                  )}
                  items={getItems(panelStyle)}
                />
              </div>
            </Col>
            <Col span={16}>
              {/* {recipeData && recipeData.length > 0 ? (
                isLoading ? (
                  <div className="recipe-spinner">
                    <Spin size="large" />
                  </div>
                ) : (
                  <RecipeCard recipeData={recipeData} />
                )
              ) : (
                <div className="no-data-container">
                  <Image preview={false} src={noData} />
                  <h2>No recipe Found</h2>
                </div>
              )} */}
              {isLoading ? (
                <div className="recipe-spinner">
                  <Spin size="large" />
                </div>
              ) : recipeData.length <= 0 ? (
                <div className="no-data-container">
                  <Image preview={false} src={noData} />
                  <h2>No recipe Found</h2>
                </div>
              ) : (
                <RecipeCard recipeData={recipeData} />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
