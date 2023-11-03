import { Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const LayoutWrapper = () => {
  return (
    <>
      <nav>
        <Header className="header">
          <div className="logo" color="#ffffff">Dish Discover</div>
          <Menu className="layout-menu" theme="dark" color="#ffffff" mode="horizontal" >
            <Menu.Item className="item">Recipes</Menu.Item>
            <Menu.Item className="item">Contact Us</Menu.Item>
          </Menu>
        </Header>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
