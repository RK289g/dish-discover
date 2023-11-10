// import { useEffect, useState } from "react";
import "./Hero.css";
// import axios from "axios";

const Hero = () => {
  // const [chickenRecipe, setChickenRecipe] = useState("");
  // const [burgerRecipe, setBurgerRecipe] = useState("");

  // useEffect(() => {
  //   const fetchChickenRecipe = async () => {
  //     axios
  //       .get(
  //         "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  //       )
  //       .then((resp) => {
  //         const data = resp.data;
  //         console.log(data.meals[0]);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching tasks: ", err);
  //       });
  //   };
  //   fetchChickenRecipe();
  // }, []);

  // useEffect(() => {
  //   const fetchBurgerRecipe = async () => {
  //     axios
  //       .get("https://www.themealdb.com/api/json/v1/1/search.php?s=burger")
  //       .then((res) => {
  //         const data = res.data;
  //         console.log(data.meals[0]);
  //       })
  //       .catch((er) => {
  //         console.error("Error fetching tasks: ", er);
  //       });
  //   };
  //   fetchBurgerRecipe();
  // }, []);

  return (
    <div>
      <div className="container">
        <div className="conatiner-wrapper">
          <div className="container-left">
            <h2>
              Craving some <br />
              delicious meals
            </h2>
            <h5>feeling the cooking vibe</h5>
            <p>You have come to right place</p>
            <button className="btn">Get started</button>
            <button className="btn">Explore recipes</button>
          </div>
          <div className="container-right">
            <img
              src="https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
