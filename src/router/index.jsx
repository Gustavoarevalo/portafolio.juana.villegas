import { createBrowserRouter } from "react-router-dom";
import Layoutpublic from "../layout/layoutp";
import Contact from "../pages/contact";

import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutpublic />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
