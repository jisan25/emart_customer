import { cartAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";

const CheckoutOrderSummary = () => {
  const cartItems = useAtomValue(cartAtom);

  const router = useRouter();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePlaceOrder = () => {
    router.push("/payment");
  };

  return (
    <div className="card p-3">
      <h4 className="mb-2">Order Summary</h4>
      <div className="d-flex justify-content-between">
        <p>Items Total</p>
        <p>tk {calculateTotalPrice()}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Delivery Fee</p>
        <p>tk 60</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Delivery Discount</p>
        <p>tk 0</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Total Payment</p>
        <p>tk {calculateTotalPrice() + 60}</p>
      </div>
      <button
        className="btn btn-primary text-white mt-3"
        onClick={handlePlaceOrder}
      >
        {" "}
        Place Order
      </button>
    </div>
  );
};

export default CheckoutOrderSummary;
