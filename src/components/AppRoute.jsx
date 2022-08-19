import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/index.js";
import { AuthContext } from "../context/context";
import Loader from "./UI/loading/Loader";

function AppRoute() {
  const { isAuth, isLoading } = useContext(AuthContext);

  let location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((item) => (
        <Route key={item.path} path={item.path} element={<item.element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to="/post" state={{ from: location }} replace />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((item) => (
        <Route key={item.path} path={item.path} element={<item.element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to="/login" state={{ from: location }} replace />}
      />
    </Routes>
  );
}

export default AppRoute;
