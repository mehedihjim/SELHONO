import Rootlayout from './layout/Rootlayout';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
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