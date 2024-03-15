import Hero from "../../components/hero/Hero";
import "./Home.css";
import RecipeOftheDay from "./../../components/recipeOfTheDay/RecipeOftheDay";
import RecipeCategory from "../../components/home/recipe-category/RecipeCategory";
import RecipeCuisine from "../../components/home/recipe-cuisine/RecipeCuisine";
import FeaturedRecipe from "../../components/home/featured-recipe/FeaturedRecipe";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <RecipeCategory />
        <FeaturedRecipe />
        <RecipeOftheDay />
        <RecipeCuisine />
      </div>
    </div>
  );
};

export default Home;
