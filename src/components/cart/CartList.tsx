import useCart from "@/hooks/useCart";

export default function CartList() {
  const { items, remove } = useCart();

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
          {items.map((item) => (
            <tr className="text-center">
              <td className="product-remove">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    remove(item.product);
                  }}
                >
                  <span className="bi bi-x"></span>
                </a>
              </td>

              <td className="image-prod">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${item.product.image})` }}
                ></div>
              </td>

              <td className="product-name">
                <h3>{item.product.name}</h3>
                <p>Far far away, behind the word mountains, far from the countries</p>
              </td>

              <td className="price">${item.product.price}</td>

              <td className="quantity">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="quantity"
                    className="quantity form-control input-number"
                    value={item.quantity}
                    readOnly
                  />
                </div>
              </td>

              <td className="total">${item.product.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
