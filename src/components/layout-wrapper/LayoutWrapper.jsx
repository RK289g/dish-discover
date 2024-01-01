import { Link, Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Footer from "../footer/Footer";

const LayoutWrapper = () => {
  return (
    <>
      <nav>
        <Header className="header">
          <Link to="/" className="logo">
            Dish Discover
          </Link>
          <Menu
            className="layout-menu"
            theme="dark"
            color="#ffffff"
            mode="horizontal"
          >
            <Link to="/Recipes" className="item">
              Recipes
            </Link>
            <Link to="/RandomRecipe" className="item">
              Random Recipe
            </Link>
            <Link to="/Article" className="item">
              Articles
            </Link>
            <Link to="/ContactUs" className="item">
              Contact Us
            </Link>
          </Menu>
        </Header>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWrapper;
