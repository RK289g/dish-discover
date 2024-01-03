import { Link, Outlet } from "react-router-dom";
import "./LayoutWrapper.css";
import { Button, Drawer, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Footer from "../footer/Footer";
import { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

const LayoutWrapper = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
              mode="vertical"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              // items={items}
              className="menu-wrapper-drawer"
              style={{
                background: "#FAFAFA",
              }}
            />
            <div className="auth-actions" onClick={onClose}>
              <Button>
                <Link to="/Recipes" className="itemx">
                  Recipes
                </Link>
              </Button>
              <Button>
                <Link to="/RandomRecipe" className="itemx">
                  Random Recipe
                </Link>
              </Button>
              <Button>
                <Link to="/Article" className="itemx">
                  Articles
                </Link>
              </Button>
              <Button>
                <Link to="/ContactUs" className="itemx">
                  Contact Us
                </Link>
              </Button>
            </div>
          </Drawer>
        </Header>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWrapper;
