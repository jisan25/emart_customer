import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "@/components/ProductDetails/BreadCrumb";
import ProductDeliverStore from "@/components/ProductDetails/ProductDeliverStore";
import ProductRatingAndReviews from "@/components/ProductDetails/ProductRatingAndReviews";
import SameCategoryProducts from "@/components/ProductDetails/SameCategoryProducts";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductQuestions from "@/components/ProductDetails/ProductQuestions";
import { backendUrl } from "@/helpers/CommonHelper";
import { useAtom } from "jotai";
import { productAtom } from "@/store/frontend/frontendAtom";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useAtom(productAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch the product data using the id
      fetch(`${backendUrl}/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.data.product);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container-fluid">
      <div className="px-xl-5">
        <div className="row">
          <div className="col-md-12 my-2">
            <BreadCrumb />
          </div>
        </div>

        <ProductDeliverStore />
        <div className="row">
          <div className="col-md-9">
            <ProductRatingAndReviews />
            <ProductDescription />
            <ProductQuestions />
          </div>
          <SameCategoryProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
