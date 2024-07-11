const PurchasedOrderSummary = ({ order_summary }) => {
  return (
    <div className="card p-3 bg-secondary">
      <div className="d-flex justify-content-between">
        <p>Order Summary</p>
        <p>tk {order_summary.order_summary}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Subtotal(1 items)</p>
        <p>tk {order_summary.sub_total}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Shipping Fee</p>
        <p>tk {order_summary.shipping_fee}</p>
      </div>
      {/* <div className="d-flex justify-content-between">
        <p>Cash Payment Fee</p>
        <p>tk 10</p>
      </div> */}
      <hr />
      <div className="d-flex justify-content-between">
        <p>Total Amount</p>
        <p>tk {order_summary.order_summary}</p>
      </div>
    </div>
  );
};

export default PurchasedOrderSummary;
