import "./recipeByCategory.css";

const RecipeByCategory = () => {
  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category">Recipe By Category</h1>

        <div className="column-recipe-category">
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Breakfast</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Starter</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Dessert</h1>
          </div>

          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Side</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeByCategory;
