import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { Login } from "@/models/Login";
import AppRoutes from "@/routes/AppRoutes";

import bg1 from "@/assets/images/bg_1.jpg";

export default function SignInPage() {
  const [data, setData] = useState<Login>({
    username: "",
    password: "",
  });
  const { isLoggedIn, login } = useAuth();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(data);
  };

  if (isLoggedIn) {
    return <Navigate to={AppRoutes.home} />;
  }

  return (
    <section className="ftco-section sign-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div
                className="img"
                style={{ backgroundImage: `url(${bg1})` }}
              ></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
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
                  className="signin-form"
                  onSubmit={handleSubmitForm}
                >
                  <div className="form-group mb-3">
                    <label
                      className="label"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      required
                      value={data.username}
                      onChange={handleChangeInput}
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
                      id="password"
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={data.password}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">
                        Remember Me
                        <input type="checkbox" />
                        <span className="checkmark">
                          <i className="bi bi-check"></i>
                        </span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                </form>
                <p className="text-center">
                  Not a member?{" "}
                  <Link
                    data-toggle="tab"
                    to={AppRoutes.signup}
                  >
                    Sign Up
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
