import { orderSummaryAtom } from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";

const CheckoutOrderSummary = () => {
  const orderSummary = useAtomValue(orderSummaryAtom);

  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push("/payment");
  };

  return (
    <div className="card p-3">
      <h4 className="mb-2">Order Summary</h4>
      <div className="d-flex justify-content-between">
        <p>Items Total</p>
        <p>tk {orderSummary.sub_total}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Delivery Fee</p>
        <p>tk {orderSummary.shipping_fee}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Delivery Discount</p>
        <p>tk 0</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Total Payment</p>
        <p>tk {orderSummary.total}</p>
      </div>
      <button
        className="btn btn-primary text-white mt-3"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutOrderSummary;
