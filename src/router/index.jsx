import { createBrowserRouter } from "react-router-dom";
import Layoutpublic from "../layout/layoutp";
import About from "../pages/about";
import Contact from "../pages/contact";
import Gallery from "../pages/galleries";
import Galeriaid from "../pages/galeriaid";

import Home from "../pages/home";
import Login from "../pages/login";
import Notfun from "../pages/notfund";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutpublic />,
    errorElement: <Notfun />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },

      {
        path: "gallery/:categoria",
        element: <Galeriaid />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
