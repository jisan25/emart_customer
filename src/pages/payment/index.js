import { axiosAuth } from "@/axiosService";
import { backendUrl } from "@/helpers/CommonHelper";
import {
  cartAtom,
  cartDataAtom,
  cartItemCountAtom,
  orderSummaryAtom,
  purchasedOrdersAtom,
} from "@/store/frontend/frontendAtom";
import axios from "axios";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCash } from "react-icons/bs";

const PaymentPage = () => {
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  const setPurchasedOrders = useSetAtom(purchasedOrdersAtom);
  const setCartData = useSetAtom(cartDataAtom);
  const setCartItemCount = useSetAtom(cartItemCountAtom);

  const [error, setError] = useState(null);

  const [orderSummary, setOrderSummary] = useAtom(orderSummaryAtom);

  const handlePaymentMethodClick = () => {
    setShowConfirmOrder(true);
  };

  const setCartItems = useSetAtom(cartAtom);
  const cartItems = useAtomValue(cartAtom);

  const router = useRouter();

  const handleConfirmOrder = async () => {
    const orderData = {
      cartitems: cartItems.map((item, index) => ({
        id: index + 1,
        product_id: item.product_id,
        delivery_type_id: 1,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axiosAuth.post("/customer/orders", orderData);
      console.log("Order placed successfully:", response.data);
      setPurchasedOrders(response.data.data.orders);
      setOrderSummary(response.data.data.order_summary);
      setCartData([]);  
      setCartItemCount(0);
      alert("Order Placed Successfully");
      localStorage.removeItem("cart");
      router.push("/purchased");
    } catch (error) {
      alert("Error");
      console.error("Error placing order:", error);
    }
  };

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(currentCart);
  }, [setCartItems]);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    axios
      .post(`${backendUrl}/cart`, currentCart)
      .then(({ data }) => {
        setOrderSummary(data.data.order_summary);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart data!", error);
        setError(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-8">
          <h4 className="my-3">Select Payment Method</h4>
          <div className="d-flex">
            <div
              className="card content-center border-primary"
              onClick={handlePaymentMethodClick}
              style={{ cursor: "pointer" }}
            >
              <BsCash className="icon-large" />
              <p>Cash On Delivery</p>
            </div>
          </div>

          {showConfirmOrder && (
            <div className="card mt-2">
              <p>
                - You may pay in cash to our courier upon receiving your parcel
                at the doorstep
              </p>
              <p>
                - Before agreeing to receive the parcel, check if your delivery
                status has been updated to 'Out for Delivery'
              </p>
              <button
                className="btn btn-primary w-25 text-white"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <h4 className="mb-2">Order Summary</h4>
            <div className="d-flex flex-end align-center">
              <p className="text-small">
                Subtotal ({orderSummary.total_items} Items and shipping fee
                included)
              </p>

              <p>tk {orderSummary.total}</p>
            </div>
            {/* <div className="d-flex flex-end align-center">
              <p>Cash Payment Fee</p>
              <p>tk 10</p>
            </div> */}

            <div className="d-flex flex-end align-center">
              <p>Total Amount</p>
              <p>tk {orderSummary.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
