import Rootlayout from './layout/Rootlayout';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
      </Route >
    </>
  )
);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App