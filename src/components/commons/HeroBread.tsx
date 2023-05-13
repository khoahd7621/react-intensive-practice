import React from "react";

import bgImage1 from "@/assets/images/bg_1.jpg";

type IHeroBreadProps = {
  AllBreadCrumbs: React.ReactNode;
  name: string;
};

export default function HeroBread({ AllBreadCrumbs, name }: IHeroBreadProps) {
  return (
    <div
      className="hero-wrap hero-bread"
      style={{ backgroundImage: `url("${bgImage1}")` }}
    >
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <p className="breadcrumbs">
              {AllBreadCrumbs} <span>{name}</span>
            </p>
            <h1 className="mb-0 bread">Products</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
