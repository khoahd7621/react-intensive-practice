import { RouteObject, createBrowserRouter } from "react-router-dom";

import { StoreLayout } from "@/layouts";
import { HomePage, ProductDetailPage, ShopPage } from "@/pages";
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
        element: <ShopPage />,
      },
      {
        path: `${AppRoutes.shop}/:slug`,
        element: <ProductDetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
