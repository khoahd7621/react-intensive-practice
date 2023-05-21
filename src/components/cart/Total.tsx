import { Link } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";
import useCart from "@/hooks/useCart";

export default function Total() {
  const { subTotal } = useCart();
  const delivery = 0;
  const discount = 0;

  return (
    <>
      <div className="cart-total mb-3">
        <h3>Cart Totals</h3>
        <p className="d-flex">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </p>
        <p className="d-flex">
          <span>Delivery</span>
          <span>${delivery}</span>
        </p>
        <p className="d-flex">
          <span>Discount</span>
          <span>${discount}</span>
        </p>
        <hr />
        <p className="d-flex total-price">
          <span>Total</span>
          <span>${subTotal + delivery - discount}</span>
        </p>
      </div>
      <p>
        <Link
          to={AppRoutes.checkout}
          className="btn btn-primary py-3 px-4"
        >
          Proceed to Checkout
        </Link>
      </p>
    </>
  );
}
