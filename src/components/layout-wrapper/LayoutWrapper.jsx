import { Link, Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Footer from "../footer/Footer";
import { useState } from "react";
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons";

const LayoutWrapper = () => {
  const dropdwn = [
    {
      label: <Link to="/cuisines">Cuisines</Link>,
      key: "5",
    },
    {
      label: <Link to="/categories">Categories</Link>,
      key: "6",
    },
    {
      label: <Link to="/ingredients">Ingredients</Link>,
      key: "7",
    },
    {
      label: <Link to="/search-AtoZ">Search A-Z</Link>,
      key: "7",
    },
  ];

  function getItem(label, key, icon, children, type) {
    return {
      key: key,
      icon: icon,
      children: children,
      label: label,
      type: type,
    };
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [
    getItem(<Link to="/">Home</Link>, "1"),
    getItem(
      <Dropdown
        overlay={
          <Menu>
            {dropdwn.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Recipes
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
    getItem(<Link to="/random-recipe">Random Recipe</Link>, "3"),
    getItem(<Link to="/contact-us">Contact Us</Link>, "4"),
  ];

  return (
    <>
      <Header className="header">
        <Link to="/" className="logo-wrapper">
          <div className="logo">
            <img src="./images/Untitled-3.svg" alt="" />
            <h3>Dish Discover</h3>
          </div>
        </Link>

        <Menu
          className="layout-menu"
          theme="dark"
          color="#ffffff"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          items={items}
        />

        <MenuFoldOutlined className="drawer-button" onClick={showDrawer} />

        <Drawer
          title="Navigations"
          placement={"right"}
          closable={true}
          onClose={onClose}
          open={open}
          key={"right"}
          className="drawer-wrapper"
        >
          <Menu
            className="drawer-layout-menu"
            theme="dark"
            color="#ffffff"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={items}
          />
        </Drawer>
      </Header>

      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWrapper;
