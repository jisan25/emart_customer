import React from "react";

const MyQuestionItem = ({ item }) => {
  return (
    <div className="card my-3 p-3">
      <h4 className="roboto-medium text-medium mb-0">
        {item.product && item.product.store && item.product.store.store_name}
      </h4>
      <div className="bg-light-gray border-radius-5 p-3">
        <div className="d-flex gap-2">
          <img className="image-small" src="/red-t-shirts.jpg" alt="product" />
          <div>
            <h6>{item.product && item.product.product_name}</h6>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4 className="mb-2 mt-1 text-dark text-lead roboto-regular font-weight-bold">
          Q: {item.title}
        </h4>
        <hr className="my-2" />
        <p className="mb-0 mt-1 text-dark text-small">A: {item.answer}</p>
      </div>
    </div>
  );
};

export default MyQuestionItem;
