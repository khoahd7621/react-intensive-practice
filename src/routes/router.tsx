import { RouteObject, createBrowserRouter } from "react-router-dom";

import ProductDetailsPage from "@/components/shop/ProductDetail";
import { StoreLayout } from "@/layouts";
import { HomePage, ShopPage } from "@/pages";
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
        element: <ProductDetailsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
