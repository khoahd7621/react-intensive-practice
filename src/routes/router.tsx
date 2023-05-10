import { RouteObject, createBrowserRouter } from "react-router-dom";

import { StoreLayout } from "@/layouts";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <StoreLayout />,
  },
];

const router = createBrowserRouter(routes);

export default router;
