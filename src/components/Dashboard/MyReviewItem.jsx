import React from "react";
import { FaStar } from "react-icons/fa";

const MyReviewItem = ({ item }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-full-${i}`} className="text-warning" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="star-half" className="text-warning" />);
    }
    while (stars.length < totalStars) {
      stars.push(
        <FaStar key={`star-empty-${stars.length}`} className="text-muted" />
      );
    }

    return stars;
  };
  return (
    <div className="card my-3 p-3">
      <h4 className="roboto-medium text-medium mb-0">My Gadgets House</h4>
      <p className="text-small">Purchased on 23 Mar 2021</p>
      <div className="bg-light-gray border-radius-5 p-3">
        <div className="d-flex gap-2">
          <img className="image-small" src="/red-t-shirts.jpg" alt="product" />
          <div>
            <h6>{item.product.product_name}</h6>
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="d-flex gap-1">{renderStars(item.rating)}</div>
        <p className="mb-0 mt-1 text-dark text-small">{item.comment}</p>
      </div>
    </div>
  );
};

export default MyReviewItem;
