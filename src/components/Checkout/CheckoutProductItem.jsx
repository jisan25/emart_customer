import { backendImageUrl, backendUrl } from "@/helpers/CommonHelper";
import {
  cartDataAtom,
  cartItemCountAtom,
  orderSummaryAtom,
} from "@/store/frontend/frontendAtom";
import axios from "axios";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CheckoutProductItem = ({ product }) => {
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);
  const setCartData = useSetAtom(cartDataAtom);
  const setOrderSummary = useSetAtom(orderSummaryAtom);

  const [error, setError] = useState(null);

  const handleRemoveItem = () => {
    const confirmRemoval = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmRemoval) {
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = currentCart.filter(
        (cartItem) => cartItem.product_id !== product.id
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItemCount(cartItemCount - product.quantity);

      axios
        .post(`${backendUrl}/cart`, updatedCart)
        .then(({ data }) => {
          setCartData(data.data.data);
          setOrderSummary(data.data.order_summary);
        })
        .catch((error) => {
          console.error("There was an error updating the cart data!", error);
          setError(error);
        });
    }
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex gap-2">
          <img
            src={backendImageUrl + "/" + product.image}
            alt=""
            className="image-small"
          />
          <div>
            <p className="text-dark">{product.product_name}</p>
            <p>No Brand, Size: XXL, Color Family: White</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <p>Qty:{product.quantity}</p>
            <p>
              <FaRegTrashAlt
                className="cursor-pointer"
                onClick={handleRemoveItem}
              />
            </p>
          </div>
          <div className="d-flex gap-4">
            <span className="badge badge-secondary h-2 px-2 py-1">
              {/* <span className="text-line-through">tk 990</span> -60% */}
            </span>
            <p>tk {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductItem;
