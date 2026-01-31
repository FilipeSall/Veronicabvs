import { lazy } from "react";

export const loadHome = () => import("../pages/home/Home");
export const loadSobremim = () => import("../pages/sobre-mim/Sobremim");
export const loadCasePage = () => import("../pages/case-page/CasePage");

export const Home = lazy(loadHome);
export const Sobremim = lazy(loadSobremim);
export const CasePage = lazy(loadCasePage);

export const prefetchRoute = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/" || normalized === "/home") {
    loadHome();
    return;
  }

  if (normalized === "/sobre-mim") {
    loadSobremim();
    return;
  }

  if (normalized.startsWith("/case")) {
    loadCasePage();
  }
};

export const preloadHomeRoutes = () => {
  loadSobremim();
  loadCasePage();
};
