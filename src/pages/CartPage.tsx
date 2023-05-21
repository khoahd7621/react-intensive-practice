import { Link } from "react-router-dom";

import { Address, CartList, Coupon, Total } from "@/components/cart";
import { HeroBread } from "@/components/commons";
import useCart from "@/hooks/useCart";
import AppRoutes from "@/routes/AppRoutes";

export default function CartPage() {
  const { items } = useCart();

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
        {items.length === 0 ? (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h2 className="mb-4">Your cart is empty</h2>
                <p>
                  <Link
                    to={AppRoutes.shop}
                    className="btn btn-primary py-3 px-4"
                  >
                    Go shopping
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <CartList />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-4 mt-5 cart-wrap">
                <Coupon />
              </div>
              <div className="col-lg-4 mt-5 cart-wrap">
                <Address />
              </div>
              <div className="col-lg-4 mt-5 cart-wrap">
                <Total />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
