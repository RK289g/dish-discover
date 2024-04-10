import "./NewsLetter.css";
import Search from "antd/es/input/Search";

function NewsLetter() {
  return (
    <div className="newsletter-wrapper">
      <h1 className="newsletter-header font-fanlste">
        Get Flavorful Recipes <br /> Delivered Directly to Your Inbox
      </h1>
      <p className="newsletter-text font-inter">
        Indulge in Handpicked Recipesand Recommendations Every Week
      </p>
      <div className="search-wrapper">
        <Search
          placeholder="Your Email"
          allowClear
          enterButton="Join"
          size="large"
          className="newsletter-search"
          //   onSearch={onSearch}
        />
      </div>
    </div>
  );
}

export default NewsLetter;
