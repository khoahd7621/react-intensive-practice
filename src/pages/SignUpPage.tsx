import { Link } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

import bg from "@/assets/images/bg_2.jpg";

export default function SignUpPage() {
  return (
    <section className="ftco-section sign-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div
                className="img"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign Up</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </a>
                    </p>
                  </div>
                </div>
                <form
                  action="#"
                  className="signin-form"
                >
                  <div className="form-group mb-3">
                    <label
                      className="label"
                      htmlFor="name"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      className="label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      className="label"
                      htmlFor="confirm-password"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-center">
                  Already have account?{" "}
                  <Link
                    data-toggle="tab"
                    to={AppRoutes.signin}
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
