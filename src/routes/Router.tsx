import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Page404 } from "./PageNotFound";
import { Default } from "../layouts/DefaultLayout";
import { Saved } from "../pages/Saved";
import { Explore } from "../pages/Explorar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/saved",
        element: <Saved />,
      },

      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },

  {
    path: "*",
    element: <Page404 />,
  },
]);
