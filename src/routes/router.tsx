import { RouteObject, createBrowserRouter } from "react-router-dom";

import { ProductsPage } from "@/components/shop";
import { StoreLayout } from "@/layouts";
import HomePage from "@/pages";
import AppRoutes from "./AppRoutes";

const routes: RouteObject[] = [
  {
    path: AppRoutes.home,
    element: <StoreLayout />,
    children: [
      {
        path: AppRoutes.home,
        element: <HomePage />,
      },
      {
        path: AppRoutes.shop,
        element: <ProductsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
