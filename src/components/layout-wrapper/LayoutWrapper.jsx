import { Link, Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Drawer, Image, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Footer from "../footer/Footer";
import { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import useGetMenuKey from "../../hooks/useGetMenuKey";
import logo from "./images/logo.png";
import NewsLetter from "../news-letter/NewsLetter";

const LayoutWrapper = () => {
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
    getItem(<Link to="/">Home</Link>, ""),
    getItem(<Link to="/recipes">Recipes</Link>, "recipes"),
    getItem(<Link to="/random-recipe">Random Recipe</Link>, "random-recipe"),
    getItem(<Link to="/contact-us">Contact Us</Link>, "contact-us"),
  ];

  const menuKey = useGetMenuKey();

  return (
    <>
      <Header className="header">
        <Link to="/" className="logo-wrapper">
          <div className="logo-inner-wrapper">
            <Image src={logo} preview={false} className="logo-image" />
            <h2>Dish discover</h2>
          </div>
        </Link>

        <Menu
          className="layout-menu"
          theme="light"
          color="#ffffff"
          mode="horizontal"
          items={items}
          selectedKeys={menuKey}
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
          onClick={onClose}
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
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LayoutWrapper;
