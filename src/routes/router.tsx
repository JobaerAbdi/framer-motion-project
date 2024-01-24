import App from "@/App";
import DashBoardLayout from "@/components/ui/layouts/DashBoardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashBoardLayout/>,
    children: [
      {
        index: true,
        element: <h1>This is sidebar</h1>,
      },
      {
        path: 'dash',
        element: <h1>This is dashboard</h1>,
      },
    ],
  },

]);

export default router;
