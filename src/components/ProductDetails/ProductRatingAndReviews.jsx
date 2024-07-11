import CardHeading from "./RatingAndReviews/CardHeading";
import RatingSummary from "./RatingAndReviews/RatingSummary";
import RatingDetails from "./RatingAndReviews/RatingDetails";
import RatingFilter from "./RatingAndReviews/RatingFilter";

import CustomerReviewItem from "./RatingAndReviews/CustomerReviewItem";
import { useAtomValue } from "jotai";
import { productAtom } from "@/store/frontend/frontendAtom";

const ProductRatingAndReviews = () => {
  const product = useAtomValue(productAtom);
  return (
    <div className="card">
      <CardHeading value="Ratings & Reviews" />
      <div className="card-body">
        <div className="row">
          <RatingSummary />
          <RatingDetails />
        </div>
        <hr />
        <RatingFilter />
        <hr />
        {product.reviews &&
          product.reviews.map((item) => <CustomerReviewItem review={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ProductRatingAndReviews;
