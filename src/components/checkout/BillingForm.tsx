import { Checkout } from "@/models/Checkout";

type BillingFormProps = {
  data: Checkout;
  setData: (data: Checkout) => void;
};

export default function BillingForm({ data, setData }: BillingFormProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <form
      action="#"
      className="billing-form"
    >
      <h3 className="mb-4 billing-heading">Billing Details</h3>
      <div className="row align-items-end">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">Firt Name *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              placeholder=""
              value={data.firstName}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              placeholder=""
              value={data.lastName}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="country">State / Country *</label>
            <div className="select-wrap">
              <div className="icon">
                <span className="bi bi-chevron-down"></span>
              </div>
              <select
                name="country"
                id="country"
                className="form-control"
                onChange={handleChangeSelect}
              >
                <option
                  value=""
                  selected={data.country === ""}
                >
                  Select a country
                </option>
                <option
                  value="France"
                  selected={data.country === "France"}
                >
                  France
                </option>
                <option
                  value="Italy"
                  selected={data.country === "Italy"}
                >
                  Italy
                </option>
                <option
                  value="Philippines"
                  selected={data.country === "Philippines"}
                >
                  Philippines
                </option>
                <option
                  value="South Korea"
                  selected={data.country === "South Korea"}
                >
                  South Korea
                </option>
                <option
                  value="Hongkong"
                  selected={data.country === "Hongkong"}
                >
                  Hongkong
                </option>
                <option
                  value="Japan"
                  selected={data.country === "Japan"}
                >
                  Japan
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="address">Street Address *</label>
            <input
              id="address"
              name="address"
              type="text"
              className="form-control"
              placeholder="House number and street name"
              value={data.address}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              name="optional"
              type="text"
              className="form-control"
              placeholder="Appartment, suite, unit etc: (optional)"
              value={data.optional}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="city">Town / City *</label>
            <input
              id="city"
              name="city"
              type="text"
              className="form-control"
              placeholder=""
              value={data.city}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="zip">Postcode / ZIP *</label>
            <input
              id="zip"
              name="zip"
              type="text"
              className="form-control"
              placeholder=""
              value={data.zip}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="form-control"
              placeholder=""
              value={data.phone}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder=""
              value={data.email}
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
