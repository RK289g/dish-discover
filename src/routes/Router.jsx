import { Routes, Route } from "react-router-dom";
// import Home from "../pages/home/Home";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import Home from "./../pages/home/Home";
import Recipe from "../pages/recipe/Recipe";
import RandomRecipe from "../pages/randomRecipe/RandomRecipe";
import Recipes from "../pages/recipes/Recipes";
import Article from "../pages/article/Article";
import ContactUs from "../pages/conactUs/ContactUs";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/RandomRecipe" element={<RandomRecipe />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
