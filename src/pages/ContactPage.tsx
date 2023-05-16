import { Link } from "react-router-dom";

import { HeroBread } from "@/components/commons";
import AppRoutes from "@/routes/AppRoutes";

export default function ContactPage() {
  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <span className="mr-2">
            <Link to={AppRoutes.checkout}>Home</Link>
          </span>
        }
        name="Contact Us"
        title="Contact Us"
      />

      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> <a>364 Cong Hoa Street, Tan Binh District, Ho Chi Minh City, Vietnam</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span> <a href="tel://+842838106200">+84 28 3810 6200</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span> <a href="mailto:hoangdangkhoa7621@gmail.com">hoangdangkhoa7621 @gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span>{" "}
                  <a
                    href="https://github.com/khoahd7621"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form
                action="#"
                className="bg-white p-5 contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div
                id="map"
                className="bg-white"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.511492091135!2d106.640723!3d10.801517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529502711460f%3A0xb7ce4406b2d0bb8b!2sC%C3%B4ng%20ty%20TNHH%20Harvey%20Nash%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1684219172614!5m2!1svi!2s"
                  style={{ border: 0, height: "100%", width: "100%" }}
                  allowFullScreen={false}
                  aria-hidden="false"
                  tabIndex={0}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
