import { Link } from "react-router-dom";

import { Count, Introduction } from "@/components/about";
import { HeroBread, Quality, Testimonial } from "@/components/commons";
import AppRoutes from "@/routes/AppRoutes";

export default function AboutPage() {
  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <span className="mr-2">
            <Link to={AppRoutes.home}>Home</Link>
          </span>
        }
        name="About Us"
        title="About Us"
      />

      <Introduction />

      <Quality />

      <Count />

      <Testimonial />
    </>
  );
}
