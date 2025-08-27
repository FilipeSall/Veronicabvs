import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import MainLayoult from "./layouts/MainLayoult";
import Home from "./pages/home/Home";
import Sobremim from "./pages/sobre-mim/Sobremim";
import CasePage from "./pages/case-page/CasePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayoult />}>
        <Route index element={<Home />} />
        <Route path="sobre-mim" element={<Sobremim />} />
        <Route path="case/:id" element={<CasePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
