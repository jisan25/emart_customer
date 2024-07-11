import React, { useEffect, useState } from "react";
import CheckoutStoreItem from "./CheckoutStoreItem";
import { cartAtom } from "@/store/frontend/frontendAtom";
import { useAtom } from "jotai";

const CheckoutStore = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="card p-3 mb-3">
      <p className="text-primary text-medium mb-3">Best Deals Corner</p>

      {cartItems.map((item, index) => (
        <CheckoutStoreItem key={index} item={item} />
      ))}

      <hr />
      <div className="border-primary-1 p-2 px-3 w-25">
        <h4 className="text-lead">Standard Delivery | tk 65</h4>
        <p className="text-small">Receive by 11 Jul - 14 Jul</p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="d-flex flex-column align-items-end">
          <p>
            {cartItems.length} item(s). Subtotal: tk {calculateTotalPrice()}
          </p>
          {/* <p>Saved tk95</p> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutStore;
