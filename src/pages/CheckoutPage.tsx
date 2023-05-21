import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { BillingForm } from "@/components/checkout";
import { HeroBread } from "@/components/commons";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import { Checkout } from "@/models/Checkout";
import AppRoutes from "@/routes/AppRoutes";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, subTotal, clear } = useCart();
  const delivery = 0;
  const discount = 0;

  const [checkout, setCheckout] = useState<Checkout>(
    user != null
      ? {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          address: user.address,
          optional: user.optional,
          city: user.city,
          country: user.country,
          zip: user.zip,
          paymentMethod: 0,
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          optional: "",
          city: "",
          country: "",
          zip: "",
          paymentMethod: 0,
        }
  );
  const [isCheckConsent, setIsCheckConsent] = useState(true);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckout({ ...checkout, [name]: value });
  };

  const handleSubmitForm = () => {
    if (
      checkout.firstName === "" ||
      checkout.lastName === "" ||
      checkout.email === "" ||
      checkout.phone === "" ||
      checkout.address === "" ||
      checkout.city === "" ||
      checkout.country === "" ||
      checkout.zip === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }
    if (checkout.paymentMethod === 0) {
      alert("Please choose a payment method!");
      return;
    }
    if (!isCheckConsent) {
      alert("Please check accept the terms and conditions!");
      return;
    }
    clear();
    alert("Checkout successfully!");
    navigate(AppRoutes.home);
  };

  if (items.length === 0) {
    return <Navigate to={AppRoutes.home} />;
  }

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
              <BillingForm
                data={checkout}
                setData={setCheckout}
              />
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
                </div>
                <div className="col-md-12">
                  <div className="cart-detail p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Method</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              value={1}
                              type="radio"
                              name="paymentMethod"
                              className="mr-2"
                              onChange={handleChangeInput}
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
                              value={2}
                              type="radio"
                              name="paymentMethod"
                              className="mr-2"
                              onChange={handleChangeInput}
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
                              value={3}
                              type="radio"
                              name="paymentMethod"
                              className="mr-2"
                              onChange={handleChangeInput}
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
                              className="mr-2"
                              checked={isCheckConsent}
                              onChange={(e) => setIsCheckConsent(e.target.checked)}
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
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmitForm();
                        }}
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
