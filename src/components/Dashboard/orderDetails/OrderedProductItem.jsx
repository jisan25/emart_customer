import { LuPackage } from "react-icons/lu";
import OrderTracking from "./OrderTracking";
import ProductItem from "./ProductItem";

const OrderedProductItem = ({ order }) => {
  return (
    <div className="card  my-2">
      <div className="my-1 p-2 px-3">
        <h3 className="text-medium text-dark mb-1 d-flex gap-1 align-items-center">
          <LuPackage /> <span className="">Package</span>
        </h3>
        <h4 className="text-small mb-0 ">
          Sold By{" "}
          <span className="text-primary roboto-medium">
            {order.store && order.store.store_name}
          </span>
        </h4>
      </div>

      <hr className="my-2" />
      <div className="d-flex justify-content-between mt-0 mb-2 p-2 px-3">
        <h5 className="text-small">Delivered on 22 Nov 2023</h5>
        <p className="text-dark mb-0 text-small">Standard Delivery</p>
      </div>

      <OrderTracking />

      <div className="row justify-content-center delivery_histroy my-1 p-2 px-3">
        <div className="col-lg-10 bg-secondary p-3 py-4 border-radius-5">
          <div className="d-flex">
            <p className="text-dark text-small">
              <span className="text-light-gray mr-4">22 Nov 2023 - 14:52 </span>
              Your package has been delivered. Thank you for shopping at Emart!
            </p>
          </div>
          <div className="d-flex">
            <p className="text-dark text-small">
              <span className="text-light-gray mr-4">22 Nov 2023 - 14:52 </span>
              Your package has been delivered. Thank you for shopping at Emart!
            </p>
          </div>
          <div className="d-flex">
            <p className="text-dark text-small">
              <span className="text-light-gray mr-4">22 Nov 2023 - 14:52 </span>
              Your package has been delivered. Thank you for shopping at Emart!
            </p>
          </div>
          <div className="d-flex">
            <p className="text-dark text-small">
              <span className="text-light-gray mr-4">22 Nov 2023 - 14:52 </span>
              Your package has been delivered. Thank you for shopping at Emart!
            </p>
          </div>
          <div className="d-flex">
            <p className="text-dark text-small">
              <span className="text-light-gray mr-4">22 Nov 2023 - 14:52 </span>
              Your package has been delivered. Thank you for shopping at Emart!
            </p>
          </div>
        </div>
      </div>
      {order.order_details &&
        order.order_details.map((item) => <ProductItem item={item} />)}
    </div>
  );
};

export default OrderedProductItem;
