import { CiHeart } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const CartProductItem = () => {
  return (
    <>
      <div className="row mt-4 mb-0">
        <div className="col-lg-6 pl-5">
          <div className="d-flex gap-4 justify-content-start align-items-center">
            <input type="checkbox" className="form-check-input" />
            <img
              src="/red-t-shirts.jpg"
              alt="product"
              className="image-medium"
            />
            <div>
              <p>Symphony S70</p>
              <p>Brand Name, Color Family: Dew Green</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between">
            <div>
              <h4>৳ 1,975</h4>
              <p>
                <span className="text-line-through">৳ 1,999</span> -1%
              </p>
              <div className="d-flex gap-2">
                <CiHeart className="cursor-pointer" />{" "}
                <FaRegTrashAlt className="cursor-pointer" />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 justify-content-end">
              <button className="btn btn-secondary">-</button>
              <input type="text" className="form-control w-10" />
              <button className="btn btn-secondary">+</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-0" />
    </>
  );
};

export default CartProductItem;
