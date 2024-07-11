import ConfirmationEmail from "@/components/Purchased/ConfirmationEmail";
import PurchasedDeliveryEstimation from "@/components/Purchased/PurchasedDeliveryEstimation";
import PurchasedOrderSummary from "@/components/Purchased/PurchasedOrderSummary";
import {
  orderSummaryAtom,
  purchasedOrdersAtom,
} from "@/store/frontend/frontendAtom";
import { useAtomValue } from "jotai";
const PurchasedPage = () => {
  const purchasedOrders = useAtomValue(purchasedOrdersAtom);
  const orderSummry = useAtomValue(orderSummaryAtom);

  return (
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5 justify-content-center">
        <div className="col-md-8">
          <p className="text-medium text-center">
            Thank You For Your Purchase!
          </p>
          <p>You have Confirmed total {purchasedOrders.length} Orders.</p>
          {purchasedOrders.map((item) => (
            <p className="text-center">
              Your order number is {item && item.order_id}
            </p>
          ))}
          <p>Get By</p>
          <PurchasedDeliveryEstimation orders={purchasedOrders} />
          <ConfirmationEmail />
          <PurchasedOrderSummary order_summary={orderSummry} />

          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary text-white">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedPage;
