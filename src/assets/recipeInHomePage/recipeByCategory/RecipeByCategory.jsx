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
              src="https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Beef</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Chicken</h1>
          </div>
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
              src="https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Pasta</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeByCategory;
