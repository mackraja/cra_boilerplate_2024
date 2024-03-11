import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";

const App = lazy(() => import("./App"));
import Spinner from "./components/Spinner";

export const ROUTES: RouteProps[] = [
  { path: "/", Component: App },
  { path: "*", element: <Navigate to="/" /> },
];

const getKey = (data: { path: RouteProps["path"]; index: number }) => {
  const { path, index } = data;
  if (typeof path !== "string") return index;
  if (path !== "") return index;
  return path;
};

function AppRoutes() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {ROUTES.map((r, i) => {
            const k = getKey({ path: r.path, index: i });
            return <Route {...r} key={k} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
