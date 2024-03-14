import axios from "axios";
import "./Recipes.css";
import { useEffect, useState } from "react";
import { Col, Divider, Image, Input, Row, Select, Spin } from "antd";
import RecipeCard from "../../components/common/recipe-card/RecipeCard";
import bannerFinal from "../../assets/banner/banner-final.jpg";
import noData from "../../assets/logo/Empty-bro.svg";
import { useLocation } from "react-router-dom";
import { getCategoriesOptions } from "../../utils/getCategoryOptions";
import { getCuisinesOptions } from "../../utils/getCuisinesOptions";
import { CategorySVG } from "../../assets/svg/CategorySVG";
import { CusineSVG } from "../../assets/svg/CusineSVG";
import { SearchSVG } from "../../assets/svg/SearchSVG";
// import FeaturedRecipe from "./../../components/home/featured-recipe/FeaturedRecipe";

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchCategoryRecipes = async (value) => {
    setIsLoading(true);

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
      .then((res) => {
        setRecipeData(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks: ", err);
        setIsLoading(false);
      });
  };

  const fetchCuisineRecipes = async (value) => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
      .then((res) => {
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
        setCategoryTypes(getCategoriesOptions(response.data.meals));
      })
      .catch((error) => {
        console.error("Error fetching ingredient types: ", error);
      });
  };

  const fetchCuisineType = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => {
        setCuisineTypes(getCuisinesOptions(response.data.meals));
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

  return (
    <div className="recipes-wrapper">
      <div className="recipes-banner">
        <Image className="banner-img" preview={false} src={bannerFinal} />
        <div className="filter-wrapper">
          <Row className="filter-row filter-wrapper">
            <Col className="filter-column">
              <p className="bar-title font-inter">Categories</p>
              <div className="select-wrapper">
                <CategorySVG />
                <Select
                  style={{
                    width: 163,
                  }}
                  placeholder="Main Dishes"
                  className="filter-select"
                  onChange={fetchCategoryRecipes}
                  options={categoryTypes}
                />
              </div>
            </Col>
            <Divider type="vertical" className="filter-divider" />
            <Col className="filter-column">
              <p className="bar-title font-inter">Cuisines</p>
              <div className="select-wrapper">
                <CusineSVG />
                <Select
                  style={{
                    width: 163,
                  }}
                  placeholder="Main dishes"
                  className="filter-select"
                  onChange={fetchCuisineRecipes}
                  options={CuisineTypes}
                />
              </div>
            </Col>
            <Divider type="vertical" className="filter-divider" />
            <Col className="filter-column">
              <Input
                size="large"
                placeholder="Search"
                prefix={<SearchSVG />}
                className="recipes-search-button"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="recipes-inner-wrapper">
        <div className="recipes-layout">
          <Row>
            <Col span={24}>
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
