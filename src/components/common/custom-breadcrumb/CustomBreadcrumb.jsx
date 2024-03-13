import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

export const CustomBreadcrumb = ({ title }) => {
  return (
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: <a href="/recipes">Recipes</a>,
        },
        {
          title: title,
        },
      ]}
    />
  );
};

CustomBreadcrumb.propTypes = {
  title: PropTypes.node.isRequired,
};
