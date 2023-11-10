// import { useEffect, useState } from "react";
import { Carousel } from "antd";
import "./Hero.css";
// import axios from "axios";

const Hero = () => {
  return (
    <div>
      {/* <div className="container">
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
      </div> */}
      <Carousel autoplay>
        <div>
          <img
            src="https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.themealdb.com/images/media/meals/sbx7n71587673022.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.themealdb.com/images/media/meals/sbx7n71587673023.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
