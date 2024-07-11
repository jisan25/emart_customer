import { backendImageUrl } from "@/helpers/CommonHelper";

const PurchasedItem = ({ item }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      {item.order_details &&
        item.order_details.map((order_details) => (
          <img
            src={backendImageUrl + "/" + order_details.product.image}
            alt="product"
            className="image-medium"
          />
        ))}
      <p>Est 11 Jul-14 Jul</p>
    </div>
  );
};

export default PurchasedItem;