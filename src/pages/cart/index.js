import CartItem from "@/components/Cart/CartItem";
import CartOrderSummary from "@/components/Cart/CartOrderSummary";
import { backendUrl } from "@/helpers/CommonHelper";
import { cartDataAtom, orderSummaryAtom } from "@/store/frontend/frontendAtom";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartData, setCartData] = useAtom(cartDataAtom);
  const [orderSummary, setOrderSummary] = useAtom(orderSummaryAtom);

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
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-9">
          {cartData &&
            cartData.map((storeCart) => <CartItem props={{ storeCart }} />)}
        </div>
        <div className="col-md-3">
          <CartOrderSummary orderSummary={orderSummary} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
