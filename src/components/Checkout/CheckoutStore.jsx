import React, { useEffect, useState } from "react";
import CheckoutStoreItem from "./CheckoutStoreItem";
import { cartDataAtom, orderSummaryAtom } from "@/store/frontend/frontendAtom";
import { useAtom, useSetAtom } from "jotai";
import axios from "axios";
import { backendUrl } from "@/helpers/CommonHelper";

const CheckoutStore = () => {
  const [cartData, setCartData] = useAtom(cartDataAtom);
  const setOrderSummary = useSetAtom(orderSummaryAtom);

  const [error, setError] = useState(null);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    axios
      .post(`${backendUrl}/cart`, currentCart)
      .then(({ data }) => {
        setCartData(data.data.data);
        setOrderSummary(data.data.order_summary);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart data!", error);
        setError(error);
      });
  }, []);

  return (
    <div className="card p-3 mb-3">
      {cartData.map((item, index) => (
        <CheckoutStoreItem key={index} item={item}  />
      ))}
    </div>
  );
};

export default CheckoutStore;
