import { useParams } from "react-router-dom";

const Recipe = () => {
  const { recipeId } = useParams();
  return (
    <div>
      <h1>Recipe:{recipeId}</h1>
    </div>
  );
};

export default Recipe;
