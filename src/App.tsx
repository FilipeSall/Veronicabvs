import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.scss';
import MainLayoult from './layouts/MainLayoult';
import GlobalProvider from './GlobalContext';
import Home from './pages/home/Home';
import Sobremim from './pages/sobre-mim/Sobremim';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayoult />}>
      <Route index element={<Home />} />
      <Route path='sobre-mim' element={<Sobremim />} />
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