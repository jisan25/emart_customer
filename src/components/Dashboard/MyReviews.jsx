import React from "react";
import SectionTitle from "./SectionTitle";
import MyReviewItem from "./MyReviewItem";

const MyReviews = ({ reviews }) => {
  return (
    <>
      <div className="card p-3">
        <div className="d-flex align-items-center justify-content-between mb-0">
          <SectionTitle value="My Reviews" />
        </div>
      </div>
      {reviews && reviews.map((item) => (
        <MyReviewItem item={item} />
      ))}
    </>
  );
};

export default MyReviews;
