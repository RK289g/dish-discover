import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
