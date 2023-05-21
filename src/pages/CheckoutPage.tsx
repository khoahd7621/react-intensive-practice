import { Link } from "react-router-dom";

import { BillingForm } from "@/components/checkout";
import { HeroBread } from "@/components/commons";
import useCart from "@/hooks/useCart";
import AppRoutes from "@/routes/AppRoutes";

export default function CheckoutPage() {
  const { subTotal } = useCart();
  const delivery = 0;
  const discount = 0;

  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <span className="mr-2">
            <Link to={AppRoutes.home}>Home</Link>
          </span>
        }
        name="Checkout"
        title="Checkout"
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 ftco-animate">
              <BillingForm />
            </div>
            <div className="col-xl-5">
              <div className="row mt-5 pt-3">
                <div className="col-md-12 d-flex mb-5">
                  <div className="cart-detail cart-total p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Cart Total</h3>
                    <p className="d-flex">
                      <span>Subtotal</span>
                      <span>${subTotal}</span>
                    </p>
                    <p className="d-flex">
                      <span>Delivery</span>
                      <span>$0.00</span>
                    </p>
                    <p className="d-flex">
                      <span>Discount</span>
                      <span>$3.00</span>
                    </p>
                    <hr />
                    <p className="d-flex total-price">
                      <span>Total</span>
                      <span>${subTotal + delivery - discount}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="cart-detail p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Method</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            Direct Bank Tranfer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            Check Payment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                            />{" "}
                            Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              value=""
                              className="mr-2"
                            />{" "}
                            I have read and accept the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary py-3 px-4"
                      >
                        Place an order
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
