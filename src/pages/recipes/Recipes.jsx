import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Navigation One",
    key: "1",
  },
  {
      label: "Navigation One",
    key: "alipay",
  },
  {
    label: "Navigation One",
  key: "alipay",
},
];
const Recipes = () => {
  const [current, setCurrent] = useState(1);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Recipes;
