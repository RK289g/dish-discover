import { Link, Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const LayoutWrapper = () => {
  return (
    <>
      <nav>
        <Header className="header">
          <div className="logo" color="#ffffff">
            Dish Discover
          </div>
          <Menu
            className="layout-menu"
            theme="dark"
            color="#ffffff"
            mode="horizontal"
          >
            <Link className="item">Recipes</Link>
            <Link to="/RandomRecipe" className="item">
              Random Recipe
            </Link>
            <Link className="item">Contact Us</Link>
          </Menu>
        </Header>
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
