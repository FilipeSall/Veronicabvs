import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.scss';
import MainLayoult from './layouts/MainLayoult';
import GlobalProvider from './GlobalContext';
import Home from './pages/home/Home';
import Sobremim from './pages/sobre-mim/Sobremim';
import Case1 from './pages/case1/Case1';
import Case2 from './pages/case2/Case2';
import Case3 from './pages/case3/Case3';
import Case4 from './pages/case4/Case4';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayoult />}>
      <Route index element={<Home />} />
      <Route path='sobre-mim' element={<Sobremim />} />
      <Route path='case-1' element={<Case1 />} />
      <Route path='case-2' element={<Case2 />} />
      <Route path='case-3' element={<Case3 />} />
      <Route path='case-4' element={<Case4 />} />
    </Route>
  ))

  return (
    <>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  )
}

export default App