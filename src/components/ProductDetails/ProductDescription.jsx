import { useAtomValue } from "jotai";
import CardHeading from "./RatingAndReviews/CardHeading";
import { productAtom } from "@/store/frontend/frontendAtom";

const ProductDescription = () => {
  const product = useAtomValue(productAtom);
  return (
    <div className="card mt-4">
      <CardHeading value={`Product details of ${product.product_name}`} />
      <div className="card-body">
        {product.description}
      </div>
    </div>
  );
};

export default ProductDescription;
