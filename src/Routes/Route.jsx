import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skill",
        element: <Skills></Skills>,
      },
      {
        path: "/project",
        element: <Skills></Skills>,
      },
      {
        path: "/contact",
        element: <Skills></Skills>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
