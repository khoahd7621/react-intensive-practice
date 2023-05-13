import { Link } from "react-router-dom";

import AppRoutes from "@/routes/AppRoutes";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to={AppRoutes.home}
        >
          Vegefoods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div
          className="collapse navbar-collapse"
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                to={AppRoutes.home}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={AppRoutes.shop}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.about}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.blog}
                className="nav-link"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.contact}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.signin}
                className="nav-link"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AppRoutes.signup}
                className="nav-link"
              >
                Sign up
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome, xxx
              </a>
              <div className="dropdown-menu">
                <Link
                  to={AppRoutes.profile}
                  className="dropdown-item"
                >
                  Profile
                </Link>
                <a
                  style={{ cursor: "pointer" }}
                  className="dropdown-item"
                >
                  Sign out
                </a>
              </div>
            </li>
            <li className="nav-item cta cta-colored">
              <Link
                to={AppRoutes.cart}
                className="nav-link"
              >
                <span className="bi bi-cart4"></span>[0]
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
