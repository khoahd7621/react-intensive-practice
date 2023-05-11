import { Outlet } from "react-router-dom";

import { MiniNav, Navbar } from "@/components/commons";

const StoreLayout = () => {
  return (
    <div className="goto-here">
      <MiniNav />
      <Navbar />
      {/* <!-- END header --> */}

      <Outlet />
      {/* <!-- END content --> */}

      {/* <!-- END footer --> */}
    </div>
  );
};

export default StoreLayout;
