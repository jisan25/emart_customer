import { backendImageUrl, backendUrl } from "@/helpers/CommonHelper";
import {
  cartDataAtom,
  cartItemCountAtom,
  orderSummaryAtom,
} from "@/store/frontend/frontendAtom";
import axios from "axios";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const CartProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);
  const setCartData = useSetAtom(cartDataAtom);
  const setOrderSummary = useSetAtom(orderSummaryAtom);

  const [error, setError] = useState(null);

  // ------- add to cart --------

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);

    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > 5) {
      value = 5;
    }

    setQuantity(value);
    updateCartItem(item.id, value);
  };

  const handleFluctuate = (type) => {
    const increment = type === "+";
    const newQuantity = Math.min(
      5,
      Math.max(1, quantity + (increment ? 1 : -1))
    );

    if (increment) {
      setCartItemCount(cartItemCount + 1);
    } else {
      setCartItemCount(cartItemCount - 1);
    }

    setQuantity(newQuantity);
    updateCartItem(item.id, newQuantity);

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
  };

  const updateCartItem = (productId, newQuantity) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = currentCart.findIndex(
      (cartItem) => cartItem.product_id === productId
    );

    if (productIndex !== -1) {
      currentCart[productIndex].quantity = newQuantity;
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  const handleRemoveItem = () => {
    const confirmRemoval = window.confirm(
      "Are you sure you want to remove this item?"
    );
    if (confirmRemoval) {
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = currentCart.filter(
        (cartItem) => cartItem.product_id !== item.id
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItemCount(cartItemCount - quantity);

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

  // ------- /add to cart --------

  return (
    <>
      <div className="row mt-4 mb-0">
        <div className="col-lg-6 pl-5">
          <div className="d-flex gap-4 justify-content-start align-items-center">
            <input type="checkbox" className="form-check-input" />
            <img
              src={backendImageUrl + item.image}
              alt="product"
              className="image-medium"
            />
            <div>
              <p>{item.product_name}</p>
              <p>Brand Name, Color Family: Dew Green</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between">
            <div>
              <h4>৳ {item.price}</h4>
              <p>
                <span className="text-line-through">৳ 1,999</span> -1%
              </p>
              <div className="d-flex gap-2">
                <CiHeart className="cursor-pointer" />{" "}
                <FaRegTrashAlt
                  className="cursor-pointer"
                  onClick={handleRemoveItem}
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 justify-content-end">
              <button
                onClick={() => handleFluctuate("-")}
                className="btn btn-secondary"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                className="form-control w-15"
                value={quantity}
                onChange={handleInputChange}
              />
              <button
                onClick={() => handleFluctuate("+")}
                className="btn btn-secondary"
                disabled={quantity >= 5}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-0" />
    </>
  );
};

export default CartProductItem;
