import { useNavigate } from "react-router-dom";
import "./RecipeCategory.css";
import { recipeByCategoryData } from "./recipeByCategoryData";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";

const RecipeCategory = () => {
  const navigate = useNavigate();
  const goToRecipe = (stateValue, CategoryRecipeIndex) => {
    navigate("/recipes", {
      state: { CategoryRecipeKey: stateValue, CategoryRecipeIndex },
    });
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
        duration: 0.2,
        transitionProperty: "easeIn",
      },
    }),
  };

  return (
    <div className="recipe-category-wrapper">
      <motion.p
        className="title-recipe-category font-fanlste"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        Top Categories
      </motion.p>

      <Row gutter={[24, 24]}>
        {recipeByCategoryData.map((type, index) => (
          <Col
            key={type.id}
            onClick={() => goToRecipe(type.subName, type.id)}
            md={8}
            lg={8}
            xl={8}
          >
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              className="category-card-container"
            >
              <Image
                src={type.image}
                preview={false}
                className="category-card-image"
              />
              <div className="categories-text-wrapper">
                <h1 className="categories-text-title font-inter">
                  {type.name}
                </h1>
                <p className="categories-text-items font-inter">
                  {type.recipeNumber}
                </p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecipeCategory;
