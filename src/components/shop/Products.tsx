import { listProducts } from "@/datas/ListProducts";
import { ProductCard } from "../commons";

export default function Products() {
  return (
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
  );
}
