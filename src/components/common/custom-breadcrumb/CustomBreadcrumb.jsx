import { Breadcrumb } from "antd";
import PropTypes from "prop-types";
import "./CustomBreadcrumb.css";

export const CustomBreadcrumb = ({ title }) => {
  return (
    <Breadcrumb
      className="breadcrumb-container"
      items={[
        {
          title: <a className="breadcrumb-link" href="/">Home</a>
        },
        {
          title: <a className="breadcrumb-link" href="/recipes">Recipes</a>,
        },
        {
          title: <p className="breadcrumb-title">{title}</p>,
        },
      ]}
    />
  );
};

CustomBreadcrumb.propTypes = {
  title: PropTypes.node.isRequired,
};
