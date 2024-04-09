import { Col, Divider, Image, Row } from "antd";
import PropTypes from "prop-types";
import "./RecipeHeader.css";
import {
  CommentOutlined,
  HeartOutlined,
  SaveOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

const RecipeHeader = ({ thumbnail, mealName, areaName, tags }) => {
  return (
    <div>
      <Row gutter={24} className="recipe-row">
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
        <Col span={12} className="">
          <div className="recipe-header-wrapper">
            <p className="recipe-title-name font-inter">{mealName}</p>
            <div className="recipe-name-wrapper">
              {areaName && (
                <p className="recipe-name font-inter">Cuisine: {areaName}</p>
              )}
              {tags && (
                <p className="recipe-name font-inter">Features: {tags}</p>
              )}
            </div>
          </div>
          <div className="icons font-inter">
            <div className="icons-wrapper">
              <HeartOutlined /> <h5>12 Likes</h5>
            </div>
            <div className="icons-wrapper">
              <CommentOutlined /> <h5>48 Comments</h5>
            </div>
            <div className="icons-wrapper">
              <ShareAltOutlined /> <h5>Share</h5>
            </div>
            <div className="icons-wrapper">
              <SaveOutlined /> <h5>Save</h5>
            </div>
          </div>
          <div className="rating-wrapper">
            <h3 className="avg-rating-icons font-inter">Average Ratings</h3>
            <StarFilled className="rating-icon-color" />
            <StarFilled className="rating-icon-color" />
            <StarFilled className="rating-icon-color" />
            <StarFilled className="rating-icon-color" />
            <StarOutlined className="rating-icon-color" />
          </div>
          <div className="rating-wrapper">
            <div className="rating-inner-wrapper">
              <h1 className="recipe-count font-inter">20</h1>
              <p className="rating-text font-inter">Ingredients</p>
            </div>
            <Divider type="vertical" className="rating-divider" />
            <div className="rating-inner-wrapper">
              <h1 className="recipe-count font-inter">10</h1>
              <p className="rating-text font-inter">Minutes</p>
            </div>
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
