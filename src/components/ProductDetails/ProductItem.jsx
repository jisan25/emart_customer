import { IoShareSocial } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useAtomValue } from "jotai";
import { productAtom } from "@/store/frontend/frontendAtom";
import { backendImageUrl } from "@/helpers/CommonHelper";
import { useRouter } from "next/router";

const ProductItem = () => {
  const product = useAtomValue(productAtom);
  const router = useRouter();

  const handleBuyNow = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    router.push("/checkout");
  };
  return (
    <div className="col-md-9">
      <div className="row card flex-row ml-1 p-3 pyc-5 box-shadow border-radius-5">
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={backendImageUrl + "/" + product.image}
            className="image-large"
            alt="product"
          />
        </div>
        <div className="col-md-8">
          <div>
            <h4 className="text-medium-plus text-dark">
              {product.product_name}
            </h4>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex gap-1 align-items-center mb-2">
                  <div className="d-flex">
                    <FaStar className="text-warning text-x-small " />
                    <FaStar className="text-warning text-x-small " />
                    <FaStar className="text-warning text-x-small " />
                    <FaStar className="text-warning text-x-small " />
                    <FaStar className="text-warning text-x-small " />
                  </div>
                  <a className="text-small roboto-regular" href="#">
                    {product.reviews && product.reviews.length} Ratings |{" "}
                  </a>
                  <a className="text-small roboto-regular" href="#">
                    {product.questions && product.questions.length} Answered
                    Questions
                  </a>
                </div>

                <div className="d-flex gap-1">
                  <p>
                    Brand:{" "}
                    <span className="text-dark roboto-regular">No Brand</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex gap-2">
                  <IoShareSocial className="text-large cursor-pointer" />
                  <CiHeart className="text-large text-dark cursor-pointer" />
                </div>
              </div>
            </div>
            <hr className="my-2 mb-3" />
            <div>
              <h3 className="mb-1">৳ {product.price}</h3>
              <p>
                <span className="text-line-through">৳450</span>{" "}
                <span className="text-dark roboto-regular">-39%</span>
              </p>
            </div>
            <div className="d-flex gap-5 align-items-center mb-4">
              <p className="text-light-gray mb-0">Quantity</p>
              <div className="d-flex">
                <button className="btn btn-secondary border-radius-2">-</button>
                <input
                  type="text"
                  required
                  value={1}
                  className="form-control product_quantity border-none "
                />
                <button className="btn btn-secondary border-radius-2">+</button>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary border-radius-5 text-white roboto-regular"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button className="btn btn-warning border-radius-5 roboto-regular">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
