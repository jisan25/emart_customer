const TotalSummary = ({ order }) => {
  const subtotal = order.order_details.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const deliveryFee = order.order_details.reduce(
    (sum, item) => sum + item.delivery_fee,
    0
  );

  return (
    <div className="col-lg-6">
      <div className="card p-3 px-3 my-2 total_summary">
        <h4 className="text-medium">Total Summary</h4>
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>৳ {subtotal}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Deliver Fee</p>
          <p>৳ {deliveryFee}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Discounts</p>
          <p>-৳ 0</p>
        </div>
        <hr className="my-2" />
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>৳ {order.total_amount}</p>
        </div>
        <p className="mt-3">
          <span className="text-light-gray">Payment Method:</span> Cash on
          Delivery
        </p>
      </div>
    </div>
  );
};

export default TotalSummary;
