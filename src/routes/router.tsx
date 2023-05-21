import { RouteObject, createBrowserRouter } from "react-router-dom";

import { StoreLayout } from "@/layouts";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ContactPage,
  HomePage,
  ProductDetailPage,
  ShopPage,
  SignInPage,
  SignUpPage,
} from "@/pages";
import AppRoutes from "./AppRoutes";
import AuthContextProvider from "@/context/AuthContextProvider";
import CartContextProvider from "@/context/CartContextProvider";

const routes: RouteObject[] = [
  {
    path: AppRoutes.home,
    element: (
      <AuthContextProvider>
        <CartContextProvider>
          <StoreLayout />
        </CartContextProvider>
      </AuthContextProvider>
    ),
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
      {
        path: AppRoutes.cart,
        element: <CartPage />,
      },
      {
        path: AppRoutes.checkout,
        element: <CheckoutPage />,
      },
      {
        path: AppRoutes.about,
        element: <AboutPage />,
      },
      {
        path: AppRoutes.contact,
        element: <ContactPage />,
      },
      {
        path: AppRoutes.signin,
        element: <SignInPage />,
      },
      {
        path: AppRoutes.signup,
        element: <SignUpPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
