import { FaStar } from "react-icons/fa";

const CustomerReview = ({review}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex gap-03">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
          </div>
          <p className="mb-0 text-dark roboto-regular text-lead">{review.customer && review.customer.full_name}</p>
        </div>
        <p className="mb-0 text-lead">10 Months Ago</p>
      </div>
      <p className="text-dark roboto-medium text-lead">
        {review.comment}
      </p>
    </>
  );
};

export default CustomerReview;
