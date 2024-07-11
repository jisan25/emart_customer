import PurchasedItem from "./PurchasedItem";

const PurchasedDeliveryEstimation = ({ orders }) => {
  return (
    <div className="card p-3 mb-3">
      {orders.map((order) => (
        <PurchasedItem key={order.id} item={order} />
      ))}

      <hr />
      {orders.map((order) => (
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            To track the delivery of your order, go to My Dashboard {">"} My
            Order
          </p>
          <a href={order.order_id}>
            <button className="btn btn-outline-primary">View Order</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PurchasedDeliveryEstimation;
