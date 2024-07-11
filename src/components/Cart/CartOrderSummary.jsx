import React from "react";

const CartOrderSummary = () => {
  return (
    <div className="card p-3">
      <h4 className="mb-2">Order Summary</h4>
      <div className="d-flex justify-content-between">
        <p>Subtotal (3 items)</p>
        <p>৳528</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Shipping Fee </p>
        <p>৳75</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Shipping Fee Discount</p>
        <p> -৳55</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Total</p>
        <p>৳548</p>
      </div>
      <button className="btn btn-primary text-white mt-3">
        PROCEED TO CHECKOUT (1)
      </button>
    </div>
  );
};

export default CartOrderSummary;
