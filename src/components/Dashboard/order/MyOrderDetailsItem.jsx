import { backendImageUrl } from "@/helpers/CommonHelper";

const MyOrderDetailsItem = ({ order_details, order }) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-2 p-3">
        <img
          src={backendImageUrl + "/" + order_details.product.image}
          alt="product"
          className="image-medium"
        />
      </div>
      <div className="col-lg-4 p-3">
        <p className="mb-0 text-dark">{order_details.product.product_name}</p>
      </div>
      <div className="col-lg-6 p-3">
        <div className="d-flex gap-5">
          <p className="mb-0">
            Qty: <span>1</span>
          </p>
          <span className="badge badge-secondary px-3 d-grid place-content-center border-radius-5">
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetailsItem;
