import { productAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";
import React from "react";
import { FaStar } from "react-icons/fa";

const RatingSummary = () => {
  const product = useAtomValue(productAtom);
  return (
    <div className="col-lg-3 border-right-light-gray">
      <div className="d-flex gap-1 align-items-center">
        <p className="text-very-large-plus mb-0 text-dark roboto-medium">4.8</p>
        <span className="badge badge-primary h-2 border-radius-5">
          Top Rated
        </span>
      </div>
      <div className="d-flex mb-2 gap-1">
        <FaStar className="text-warning text-medium-plus" />
        <FaStar className="text-warning text-medium-plus" />
        <FaStar className="text-warning text-medium-plus" />
        <FaStar className="text-warning text-medium-plus" />
        <FaStar className="text-warning text-medium-plus" />
      </div>
      <p className="mb-0 text-dark roboto-primary text-lead">{product.reviews && product.reviews.length} ratings</p>
    </div>
  );
};

export default RatingSummary;
