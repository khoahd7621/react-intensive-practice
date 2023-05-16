import { Link } from "react-router-dom";

import { HeroBread } from "@/components/commons";
import { Products } from "@/components/shop";
import AppRoutes from "@/routes/AppRoutes";

export default function ShopPage() {
  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <span className="mr-2">
            <Link to={AppRoutes.home}>Home</Link>
          </span>
        }
        name="Products"
        title="Products"
      />

      <Products />
    </>
  );
}
