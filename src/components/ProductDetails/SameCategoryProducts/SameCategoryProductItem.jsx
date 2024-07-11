import Ratings from "../Ratings";

const SameCategoryProductItem = () => {
  return (
    <div className="card-body my-2">
      <div className="d-flex flex-column">
        <img src="/red-t-shirts.jpg" alt="product" className="image-large" />
        <p className="roboto-regular text-lead line-height-12 my-2 mt-2 text-dark">
          Food A Holic Calming & Moisturization Aloe Very Purity ...
        </p>
        <Ratings />

        <p className="text-large-plus text-primary mt-2 roboto-medium mb-0">
          ৳ 109
        </p>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default SameCategoryProductItem;
