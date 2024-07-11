import { backendImageUrl } from "@/helpers/CommonHelper";

const ProductItem = ({ item }) => {
  return (
    <div className="row p-2 px-3 mb-3 align-items-center">
      <div className="col-md-6">
        <div className="d-flex align-items-center">
          <img
            src={backendImageUrl + "/" + item.product.image}
            className="image-medium"
            alt="product"
          />
          <p className="text-lead text-dark">
            {item.product && item.product.product_name}
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-lead text-dark">৳ {item.product.price}</p>
          <p className="mb-0">
            <span className="text-dark-gray">Qty:</span> 1
          </p>
          <a className="text-uppercase mb-0 text-primary hover_link_style cursor-pointer">
            Write a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
