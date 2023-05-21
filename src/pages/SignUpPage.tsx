import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { Register } from "@/models/Register";
import AppRoutes from "@/routes/AppRoutes";

import bg from "@/assets/images/bg_2.jpg";

export default function SignUpPage() {
  const [data, setData] = useState<Register>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Password and confirm password are not the same!");
      return;
    }
    setData({
      username: "",
      password: "",
      confirmPassword: "",
    });
    alert("Sign up successfully!");
    navigate(AppRoutes.home);
  };

  if (isLoggedIn) {
    return <Navigate to={AppRoutes.home} />;
  }

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
                        <span className="bi bi-facebook"></span>
                      </a>
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center ml-2"
                      >
                        <span className="bi bi-twitter"></span>
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
                      id="username"
                      type="text"
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
                  <div className="form-group mb-3">
                    <label
                      className="label"
                      htmlFor="confirm-password"
                    >
                      Confirm password
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      required
                      value={data.confirmPassword}
                      onChange={handleChangeInput}
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
