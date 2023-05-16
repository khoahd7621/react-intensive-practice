import bg3Img from "@/assets/images/bg_3.jpg";

export default function Count() {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(${bg3Img})` }}
    >
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number"
                      data-number="10000"
                    >
                      0
                    </strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number"
                      data-number="100"
                    >
                      0
                    </strong>
                    <span>Branches</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number"
                      data-number="1000"
                    >
                      0
                    </strong>
                    <span>Partner</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong
                      className="number"
                      data-number="100"
                    >
                      0
                    </strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
