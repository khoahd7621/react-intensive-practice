import { Link } from "react-router-dom";

import { listProducts } from "@/datas/ListProducts";
import AppRoutes from "@/routes/AppRoutes";
import { ProductCard } from "../commons";

import bgImage1 from "@/assets/images/bg_1.jpg";

export default function Products() {
  return (
    <>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url("${bgImage1}")` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to={AppRoutes.home}>Home</Link>
                </span>{" "}
                <span>Products</span>
              </p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <a
                    href="#"
                    className="active"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Juice</a>
                </li>
                <li>
                  <a href="#">Dried</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {listProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
