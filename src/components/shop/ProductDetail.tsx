import { useEffect, useState } from "react";

import { listProducts } from "@/datas/ListProducts";
import useCart from "@/hooks/useCart";
import { Product } from "@/models/Product";
import { ProductCard } from "../commons";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <a
                href={product.image}
                target="_blank"
                rel="noopener noreferrer"
                className="image-popup"
              >
                <img
                  src={product.image}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate">
              <h3>{product.name}</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <a
                    href="#"
                    className="mr-2"
                  >
                    {product.ratingStar}
                  </a>
                  <a href="#">
                    <span className="bi bi-star"></span>
                  </a>
                  <a href="#">
                    <span className="bi bi-star"></span>
                  </a>
                  <a href="#">
                    <span className="bi bi-star"></span>
                  </a>
                  <a href="#">
                    <span className="bi bi-star"></span>
                  </a>
                  <a href="#">
                    <span className="bi bi-star"></span>
                  </a>
                </p>
                <p className="text-left mr-4">
                  <a
                    href="#"
                    className="mr-2"
                    style={{ color: "#000" }}
                  >
                    {product.ratingCount} <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a
                    href="#"
                    className="mr-2"
                    style={{ color: "#000" }}
                  >
                    {product.soldCount} <span style={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p className="price">
                {product.isDiscount ? (
                  <>
                    <span
                      className="mr-2"
                      style={{ textDecoration: "line-through", fontSize: "24px", color: "#b3b3b3" }}
                    >
                      ${product.price}
                    </span>
                    <span className="price-sale">${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </p>
              <p>{product.description}</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="bi bi-chevron-down"></span>
                      </div>
                      <select
                        name=""
                        id=""
                        className="form-control"
                      >
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field=""
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    value={quantity}
                    min="1"
                    max="999"
                    readOnly
                  />
                  <span className="input-group-btn ml-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field=""
                      onClick={() => quantity < 999 && setQuantity(quantity + 1)}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </span>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p style={{ color: "#000" }}>{product.inStockCount} kg available</p>
                </div>
              </div>
              <p>
                <a
                  style={{ cursor: "pointer" }}
                  href="#"
                  className="btn btn-black py-3 px-5"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, quantity);
                  }}
                >
                  Add to Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Products</span>
              <h2 className="mb-4">Related Products</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {listProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
