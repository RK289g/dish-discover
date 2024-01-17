const RecipeByCuisine = () => {
  return (
    <div className="recipe-category-wrapper">
      <div className="recipe-category-inner-wrapper">
        <h1 className="title-recipe-category">Recipe By Cuisine</h1>

        <div className="column-recipe-category">
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">American</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">British</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Indian</h1>
          </div>
          <div className="category-card-container">
            <img
              className="img-recipe-category"
              src="https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg"
              alt=""
            />
            <h1 className="text-recipe-category">Mexican</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeByCuisine;
