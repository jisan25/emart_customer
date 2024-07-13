import { IoShareSocial } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useAtom, useAtomValue } from "jotai";
import { cartItemCountAtom, productAtom } from "@/store/frontend/frontendAtom";
import { backendImageUrl } from "@/helpers/CommonHelper";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import NotificationModal from "../common/NotificationModal";
import TriggerModal from "../common/Modal/TriggerModal";

const ProductItem = () => {
  const router = useRouter();

  const product = useAtomValue(productAtom);
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);

  const [quantity, setQuantity] = useState(1);

  const triggerModal = useRef();

  const handleBuyNow = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cartItemCount + 1);
    const productIndex = currentCart.findIndex(
      (item) => item.product_id === product.id
    );
    if (productIndex !== -1) {
      currentCart[productIndex].quantity += quantity;
      if (currentCart[productIndex].quantity > 5) {
        currentCart[productIndex].quantity = 5; // Ensure the quantity does not exceed 5
      }
    } else {
      const cartProduct = {
        product_id: product.id,
        delivery_type_id: 1,
        quantity: 1,
      };
      currentCart.push(cartProduct);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    router.push("/checkout");
  };

  // ------- add to cart --------
  const handleInputChange = (e) => {
    let value = e.target.value;

    switch (true) {
      case value > 5:
        setQuantity(5);
        break;

      case value == 0:
        setQuantity(1);
        break;
      default:
        setQuantity(value);
        break;
    }
  };
  const handleFluctuate = (type) => {
    let newQuantity = type === "+" ? quantity + 1 : quantity - 1;
    newQuantity = newQuantity > 5 ? 5 : newQuantity < 1 ? 1 : newQuantity;
    setQuantity(newQuantity);
  };
  const handleAddToCart = () => {
    if (totalCartItem + quantity > 5) {
      alert("You can't place more than 5 orders at a time.");
      return;
    }

    setTotalCartItem(totalCartItem + quantity);
    setCartItemCount(cartItemCount + quantity);

    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = currentCart.findIndex(
      (item) => item.product_id === product.id
    );

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += quantity;
      if (currentCart[productIndex].quantity > 5) {
        currentCart[productIndex].quantity = 5; // Ensure the quantity does not exceed 5
      }
    } else {
      const cartProduct = {
        product_id: product.id,
        delivery_type_id: 1,
        quantity: quantity,
      };
      currentCart.push(cartProduct);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    triggerModal.current.click();
  };
  // ------- /add to cart --------

  return (
    <div className="col-md-9">
      <TriggerModal props={{ triggerModal }} />

      <div className="row card flex-row ml-1 p-3 pyc-5 box-shadow border-radius-5">
        <NotificationModal props={{ quantity, router }} />
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
                <button
                  className="btn btn-secondary border-radius-2"
                  onClick={() => handleFluctuate("-")}
                  disabled={quantity == 1}
                >
                  -
                </button>
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => handleInputChange(e)}
                  className="form-control product_quantity border-none "
                />
                <button
                  className="btn btn-secondary border-radius-2"
                  onClick={() => handleFluctuate("+")}
                  disabled={quantity >= 5}
                >
                  +
                </button>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary border-radius-5 text-white roboto-regular"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button
                className="btn btn-warning border-radius-5 roboto-regular"
                onClick={handleAddToCart}
              >
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
