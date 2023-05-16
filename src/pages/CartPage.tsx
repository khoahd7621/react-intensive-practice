import { Link } from "react-router-dom";

import { Address, CartList, Coupon, Total } from "@/components/cart";
import { HeroBread } from "@/components/commons";
import AppRoutes from "@/routes/AppRoutes";

export default function CartPage() {
  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <span className="mr-2">
            <Link to={AppRoutes.home}>Home</Link>
          </span>
        }
        name="Cart"
        title="My Cart"
      />

      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <CartList />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <Coupon />
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <Address />
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <Total />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
