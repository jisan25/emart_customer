import React from "react";
import { FaEye } from "react-icons/fa";
import MyOrderDetailsItem from "./order/MyOrderDetailsItem";
import { useAtom, useSetAtom } from "jotai";
import {
  orderItemAtom,
  showOrderDetailsAtom,
} from "@/store/frontend/frontendAtom";
import { axiosAuth } from "@/axiosService";
import { backendUrl } from "@/helpers/CommonHelper";

const MyOrderItem = ({ item }) => {
  const setShowOrderDetails = useSetAtom(showOrderDetailsAtom);
  const [orderItem, setOrderItem] = useAtom(orderItemAtom);
  const handleOrderDetails = async (orderId) => {
    try {
      const { data } = await axiosAuth.get(
        backendUrl + "/customer/orders/" + orderId
      );
      setOrderItem(data.data.order);
      setShowOrderDetails(true);
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    }
  };
  return (
    <div className="card my-3">
      <div className="d-flex align-items-start justify-content-between p-3 px-3">
        <div>
          <h4 className="mb-0 text-medium">
            Order{" "}
            <a className="text-primary" href="#">
              #{item.order_id}
            </a>
          </h4>
          <p className="mb-0 text-small">Placed on 06 Jun 2024 15:40:35</p>
        </div>
        <a
          className="text-primary text-small"
          onClick={() => handleOrderDetails(item.order_id)}
          href="#"
        >
          <FaEye /> View Details
        </a>
      </div>
      <hr className="my-0" />
      {item.order_details &&
        item.order_details.map((details) => (
          <MyOrderDetailsItem order_details={details} order={item} />
        ))}
    </div>
  );
};

export default MyOrderItem;
