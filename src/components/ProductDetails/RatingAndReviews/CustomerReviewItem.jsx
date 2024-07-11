import CustomerReview from "./CustomerReview";
import SellerResponse from "./SellerResponse";

const CustomerReviewItem = ({review}) => {
  return (
    <div className="my-3">
      <CustomerReview review={review}/>
      <SellerResponse />
    </div>
  );
};

export default CustomerReviewItem;
