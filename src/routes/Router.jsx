import { Routes, Route } from "react-router-dom";
// import Home from "../pages/home/Home";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import Home from "./../pages/home/Home";
import Recipe from "../pages/recipe/Recipe";
import RandomRecipe from "../pages/randomRecipe/RandomRecipe";
import Recipes from "../pages/recipes/Recipes";
import ContactUs from "../pages/conactUs/ContactUs";
import Category from "../pages/category/Category";
import Ingredient from "../pages/ingredients/Ingredients";
import AtoZ from "../pages/aToZ/AtoZ";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/ingredients" element={<Ingredient />} />
        <Route path="/search-AtoZ" element={<AtoZ />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
        <Route path="/random-recipe" element={<RandomRecipe />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
