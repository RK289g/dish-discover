import { Col, Image, Row } from "antd";
import PropTypes from "prop-types";
import "./RecipeHeader.css";

const RecipeHeader = ({ thumbnail, mealName, areaName, tags }) => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={12}>
          <div className="header-image-wrapper">
            <Image
              preview={false}
              className="header-image"
              src={thumbnail}
              alt="ThumbNail"
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="recipe-header-wrapper">
            <p className="recipe-name font-inter">{mealName}</p>
            {areaName && <p className="recipe-name">Cusine: {areaName}</p>}
            {tags && <p className="recipe-name">Features: {tags}</p>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

RecipeHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  mealName: PropTypes.string.isRequired,
  areaName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeHeader;
