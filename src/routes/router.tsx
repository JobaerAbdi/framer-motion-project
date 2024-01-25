import App from "@/App";
import DashBoardLayout from "@/components/ui/layouts/DashBoardLayout";
import ServiceSection from "@/pages/ServiceSection";

import Home from "@/pages/home";
import AboutUsSection from "@/pages/home/AboutUsSection";
import HeroSection from "@/pages/home/HeroSection";
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
        path: "hero",
        element: <HeroSection/>,
      },
      {
        path: "about",
        element: <AboutUsSection />,
      },
      {
        path: "service",
        element: <ServiceSection />,
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
