import product3Image from "@/assets/images/product-3.jpg";

export default function CartList() {
  return (
    <div className="cart-list">
      <table className="table">
        <thead className="thead-primary">
          <tr className="text-center">
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="product-remove">
              <a href="#">
                <span className="bi bi-x"></span>
              </a>
            </td>

            <td className="image-prod">
              <div
                className="img"
                style={{ backgroundImage: `url(${product3Image})` }}
              ></div>
            </td>

            <td className="product-name">
              <h3>Bell Pepper</h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </td>

            <td className="price">$4.90</td>

            <td className="quantity">
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="quantity"
                  className="quantity form-control input-number"
                  value="1"
                  min="1"
                  max="100"
                />
              </div>
            </td>

            <td className="total">$4.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
