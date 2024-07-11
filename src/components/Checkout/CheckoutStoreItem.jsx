import { backendImageUrl } from "@/helpers/CommonHelper";
import { FaRegTrashAlt } from "react-icons/fa";
const CheckoutStoreItem = ({ item }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <div className="d-flex gap-2">
          <img
            src={backendImageUrl + "/" + item.image}
            alt=""
            className="image-small"
          />
          <div>
            <p className="text-dark">{item.product_name}</p>
            <p>No Brand, Size: XXL, Color Family: White</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <p>Qty:1</p>
            <p>
              <FaRegTrashAlt className="cursor-pointer" />
            </p>
          </div>
          <div className="d-flex gap-4">
            <span className="badge badge-secondary h-2 px-2 py-1">
              <span className="text-line-through">tk 990</span> -60%
            </span>
            <p>tk {item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStoreItem;
