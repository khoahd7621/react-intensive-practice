export default function Address() {
  return (
    <>
      <div className="cart-total mb-3">
        <h3>Estimate shipping and tax</h3>
        <p>Enter your destination to get a shipping estimate</p>
        <form
          action="#"
          className="info"
        >
          <div className="form-group">
            <label htmlFor="">Country</label>
            <input
              type="text"
              className="form-control text-left px-3"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">State/Province</label>
            <input
              type="text"
              className="form-control text-left px-3"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Zip/Postal Code</label>
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
          Estimate
        </a>
      </p>
    </>
  );
}
