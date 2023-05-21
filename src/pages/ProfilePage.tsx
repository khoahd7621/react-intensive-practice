import { useState } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { User } from "@/models/User";
import AppRoutes from "@/routes/AppRoutes";

export default function ProfilePage() {
  const { isLoggedIn, user, updateProfile } = useAuth();

  const [data, setData] = useState<User>({
    ...(user as User),
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(data);
    alert("Update profile successfully!");
  };

  if (!isLoggedIn) return <Navigate to={AppRoutes.signin} />;

  return (
    <section className="ftco-section sign-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-8">
            <div className="p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4 text-center">Edit profile</h3>
                </div>
              </div>
              <form onSubmit={handleSubmitForm}>
                <div className="form-group mb-3">
                  <label
                    className="label"
                    htmlFor="firstName"
                  >
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="First name"
                    required
                    onChange={handleChangeInput}
                    value={data.firstName}
                  />
                </div>
                <div className="form-group mb-3">
                  <label
                    className="label"
                    htmlFor="lastName"
                  >
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Last name"
                    required
                    onChange={handleChangeInput}
                    value={data.lastName}
                  />
                </div>
                <div className="form-group mb-3">
                  <label
                    className="label"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChangeInput}
                    value={data.email}
                  />
                </div>
                <div className="form-group mb-3">
                  <label
                    className="label"
                    htmlFor="phone"
                  >
                    Phone *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    required
                    onChange={handleChangeInput}
                    value={data.phone}
                  />
                </div>
                <div className="form-group mb-3">
                  <label
                    className="label"
                    htmlFor="address"
                  >
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    required
                    onChange={handleChangeInput}
                    value={data.address}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
