import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import MyOrderItem from "./MyOrderItem";

import ShippingAddress from "./orderDetails/ShippingAddress";
import TotalSummary from "./orderDetails/TotalSummary";

import OrderedProductItem from "./orderDetails/OrderedProductItem";
import { useAtom, useAtomValue } from "jotai";
import {
  orderItemAtom,
  showOrderDetailsAtom,
} from "@/store/frontend/frontendAtom";

const MyOrders = ({ orders }) => {
  const [showOrderDetails, setShowOrderDetails] = useAtom(showOrderDetailsAtom);
  const orderItem = useAtomValue(orderItemAtom);

  return (
    <>
      {!showOrderDetails ? (
        <>
          <div className="card p-3">
            <div className="mb-0">
              <SectionTitle value="My Orders" />
            </div>
          </div>
          {orders && orders.map((item) => <MyOrderItem item={item} />)}
        </>
      ) : (
        <>
          <div className="card p-3">
            <div className="mb-0">
              <SectionTitle value="Order Details" />
            </div>
          </div>
          <div className="card p-2 pyc-3 px-3 my-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="text-lead mbc-1">Order #{orderItem.order_id}</h4>
                <p className="mb-0 text-x-small">
                  Placed on 21 Nov 2023 08:17:54
                </p>
              </div>
              <h4 className="text-medium">
                <span className="text-dark-gray">Total:</span> ৳
                {orderItem.total_amount}
              </h4>
            </div>
          </div>
          <OrderedProductItem order={orderItem}/>

          <div className="row">
            <ShippingAddress />
            <TotalSummary order={orderItem}/>
          </div>
        </>
      )}
    </>
  );
};

export default MyOrders;
