import { Routes, Route } from "react-router-dom";
// import Home from "../pages/home/Home";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import Home from "./../pages/home/Home";
import Recipe from "../pages/recipe/Recipe";
import RandomRecipe from "../pages/randomRecipe/RandomRecipe";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/RandomRecipe" element={<RandomRecipe />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
