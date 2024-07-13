import {
  orderItemAtom,
  showOrderDetailsAtom,
} from "@/store/frontend/frontendAtom";
import PurchasedItem from "./PurchasedItem";
import { useSetAtom } from "jotai";
import { axiosAuth } from "@/axiosService";
import { backendUrl } from "@/helpers/CommonHelper";
import { useRouter } from "next/router";

const PurchasedDeliveryEstimation = ({ orders }) => {
  const router = useRouter();

  const setShowOrderDetails = useSetAtom(showOrderDetailsAtom);
  const setOrderItem = useSetAtom(orderItemAtom);
  const handleOrderDetails = async (orderId) => {
    try {
      const { data } = await axiosAuth.get(
        backendUrl + "/customer/orders/" + orderId
      );
      setOrderItem(data.data.order);
      setShowOrderDetails(true);
      router.push("/dashboard");  
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
  };

  return (
    <div className="card p-3 mb-3">
      {orders.map((order) => (
        <PurchasedItem key={order.id} item={order} />
      ))}

      <hr />
      {orders.map((order) => (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="mb-0">
            To track the delivery of your order, go to My Dashboard {">"} My
            Order
          </p>
          <a
            onClick={() => handleOrderDetails(order.order_id)}
            className="cursor-pointer"
          >
            <button className="btn btn-outline-primary">View Order</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PurchasedDeliveryEstimation;
