import CheckoutOrderSummary from "@/components/Checkout/CheckoutOrderSummary";
import CheckoutStore from "@/components/Checkout/CheckoutStore";
import DeliveryDetails from "@/components/Checkout/DeliveryDetails";

const CheckOutPage = () => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-9">
          <DeliveryDetails />
          <CheckoutStore />
        </div>
        <div className="col-md-3">
          <CheckoutOrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
