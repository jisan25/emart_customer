import React from "react";
import "./orderTracking.css";

const OrderTracking = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 hh-grayBox pt45 pb20">
          <div class="row justify-content-between">
            <div class="order-tracking completed">
              <span class="is-complete"></span>
              <p>
                Ordered
                <br />
                <span>Mon, June 24</span>
              </p>
            </div>
            <div class="order-tracking completed">
              <span class="is-complete"></span>
              <p>
                Shipped
                <br />
                <span>Tue, June 25</span>
              </p>
            </div>
            <div class="order-tracking">
              <span class="is-complete"></span>
              <p>
                Delivered
                <br />
                <span>Fri, June 28</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
