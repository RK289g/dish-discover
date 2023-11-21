import React from "react";
import "./Hero.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";

const Hero = () => {
  return (
    <div className="Hero-wrapper">
      <h4 className="Hero-header">Explore Over 5000+ <span>Unique Recipes</span></h4>
      <div className="input-div">
        <input
          className="input-class"
          type="text"
          placeholder="Search Recipes..."
        />
        <Tooltip>
          <Button size="large" type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </Tooltip>
      </div>
      <p>
        <span>Cant think of anything?</span> Try these popular tags
      </p>
      <Flex className="multi-btn" gap="small" wrap="wrap">
        <Button className="btn-tags" type="primary" size="large">
          Meat
        </Button>
        <Button className="btn-tags" type="primary" size="large">
          Breakfast
        </Button>
        <Button className="btn-tags" type="primary" size="large">
          Sweet
        </Button>
        <Button className="btn-tags" type="primary" size="large">
          Seafood
        </Button>
      </Flex>
    </div>
  );
};

export default Hero;
