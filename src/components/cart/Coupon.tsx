export default function Coupon() {
  return (
    <>
      <div className="cart-total mb-3">
        <h3>Coupon Code</h3>
        <p>Enter your coupon code if you have one</p>
        <form
          action="#"
          className="info"
        >
          <div className="form-group">
            <label htmlFor="">Coupon code</label>
            <input
              type="text"
              className="form-control text-left px-3"
              placeholder=""
            />
          </div>
        </form>
      </div>
      <p>
        <a
          href="#"
          className="btn btn-primary py-3 px-4"
        >
          Apply Coupon
        </a>
      </p>
    </>
  );
}
