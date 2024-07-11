import ProductItem from "./ProductItem";
import DeliveryDetails from "./DeliveryDetails";
import VendorStore from "./VendorStore";

const ProductDeliverStore = () => {
  return (
    <div className="row product">
      <ProductItem />
      <div className="col-md-3 pr-0">
        <DeliveryDetails />
        <VendorStore />
      </div>
    </div>
  );
};

export default ProductDeliverStore;
