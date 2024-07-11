import React from "react";
import SameCategoryProductsHeading from "./SameCategoryProducts/SameCategoryProductsHeading";
import SameCategoryProductItem from "./SameCategoryProducts/SameCategoryProductItem";

const SameCategoryProducts = () => {
  return (
    <div className="col-md-3">
      <div className="card">
        <SameCategoryProductsHeading />
        <SameCategoryProductItem />
        <SameCategoryProductItem />
        <SameCategoryProductItem />
        <SameCategoryProductItem />
        <SameCategoryProductItem />
      </div>
    </div>
  );
};

export default SameCategoryProducts;
