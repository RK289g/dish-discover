import "./CommentSection.css";
import {
  RightOutlined,
  StarFilled,
  StarOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import commentSectionData from "./commentSectionData";

function CommentSection() {
  const navigate = useNavigate();

  const handleClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };
  return (
    <div className="comment-section-wrapper">
      <Row gutter="80">
        <Col xl={14} md={14} sm={24}>
          <div>
            <h2 className="title-recipe-category font-fanlste">
              Comments, questions and tips
            </h2>
            <div className="comment-rating-wrapper">
              <h2 className="text-rate font-inter">Rate this Recipe</h2>
              <div className="rating-icon-div">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
              </div>
            </div>
          </div>
          {commentSectionData.map((comment) => (
            <Row className="comment-section" key={comment.id}>
              <Col span={8} className="icon-wrapper">
                <UserOutlined className="user-class" />
                <p className="comment-text font-inter">{comment.timeAgo}</p>
              </Col>
              <Col span={16}>
                <div className="user-icon-div">
                  {Array.from({ length: 5 }, (_, index) =>
                    index < comment.rating ? (
                      <StarFilled key={index} />
                    ) : (
                      <StarOutlined key={index} />
                    )
                  )}
                </div>
                <div>
                  <p className="comment-text font-inter">{comment.text}</p>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xl={10} md={10} sm={12}>
          <h2 className="related-recipe font-fanlste">Related Recipes</h2>
          <div className="related-card-wrapper">
            <Card hoverable className="card">
              <div>
                <img
                  className="image"
                  src="https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg"
                  alt="ThumbNail"
                />
                <div className="card-text">
                  <div className="card-text-category-likes-wrapper">
                    <div className="card-text-category">
                      <p className="font-inter">Egyptian</p>
                    </div>
                    <div className="card-text-likes font-inter">
                      <HeartOutlined className="card-text-likes-icon" />
                      <p>12k likes</p>
                    </div>
                  </div>
                  <h1 className="card-text-title font-inter">Ful Medames</h1>
                  <div className="text-btn-wrapper">
                    <h5 className="card-instruction-text font-inter">
                      As the cooking time varies depending on the quality and
                      age of the beans, it is good to cook ...
                    </h5>
                  </div>
                  <div className="button-wrapper">
                    <Button
                      onClick={() => {
                        handleClick(53025);
                      }}
                      className="card-button"
                      icon={<RightOutlined />}
                    >
                      See Recipe
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card hoverable className="card">
              <div>
                <img
                  className="image"
                  src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg"
                  alt="ThumbNail"
                />
                <div className="card-text">
                  <div className="card-text-category-likes-wrapper">
                    <div className="card-text-category">
                      <p className="font-inter">american</p>
                    </div>
                    <div className="card-text-likes font-inter">
                      <HeartOutlined className="card-text-likes-icon" />
                      <p>12k likes</p>
                    </div>
                  </div>
                  <h1 className="card-text-title font-inter">
                    Banana Pancakes
                  </h1>
                  <div className="text-btn-wrapper">
                    <h5 className="card-instruction-text font-inter">
                      In a bowl, mash the banana with a fork until it resembles
                      a thick purée. Stir in the eggs, baking ...
                    </h5>
                  </div>
                  <div className="button-wrapper">
                    <Button
                      onClick={() => {
                        handleClick(53025);
                      }}
                      className="card-button"
                      icon={<RightOutlined />}
                    >
                      See Recipe
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CommentSection;
