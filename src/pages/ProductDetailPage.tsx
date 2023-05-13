import { Link, Navigate, useParams } from "react-router-dom";

import { HeroBread } from "@/components/commons";
import { ProductDetails } from "@/components/shop";
import { listProducts } from "@/datas/ListProducts";
import { Product } from "@/models/Product";
import AppRoutes from "@/routes/AppRoutes";

export default function ProductDetailPage() {
  // Get the userId param from the URL.
  const { slug } = useParams();

  const product: Product | undefined = listProducts.find((product) => product.slug === slug);

  if (product === undefined) {
    return <Navigate to={AppRoutes.shop} />;
  }

  return (
    <>
      <HeroBread
        AllBreadCrumbs={
          <>
            <span className="mr-2">
              <Link to={AppRoutes.home}>Home</Link>
            </span>{" "}
            <span className="mr-2">
              <Link to={AppRoutes.shop}>Shop</Link>
            </span>
          </>
        }
        name={product.name}
      />

      <ProductDetails product={product} />
    </>
  );
}
